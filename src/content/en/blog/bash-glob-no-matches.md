---
title: "Debugging Bash Globs With No Matches"
description: "See what Bash passes when a wildcard matches nothing. Use nullglob or failglob for empty matches and quoted array expansions for filenames with spaces."
date: "2026-11-18"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/ac4f6af2dfb3cbb4d40d1744f7301d33575a896bbf5e73e3c3587a34eaf06f96.webp"
keywords:
  - "Bash glob no matches"
  - "Bash nullglob"
  - "Bash failglob"
  - "Bash wildcard not expanding"
  - "Bash glob filenames with spaces"
---

An unquoted `./*.csv` can reach a command with the asterisk still in it. When a glob (a filename pattern) matches zero paths, Bash keeps the original pattern as one argument by default. That's how a command can report “No such file or directory” for `./*.csv` when the directory simply has no CSV files.

To see what Bash passed, swap the command for `show_args` from the lab below. If one argument still contains `*`, check whether the pattern was quoted and whether your script is running in the directory you expect. For a pattern that matches nothing, `nullglob` drops it from the arguments and `failglob` makes Bash report an error. Choose based on whether zero matches are acceptable. [GNU Bash filename expansion](https://www.gnu.org/software/bash/manual/html_node/Filename-Expansion.html)

![A gardener holds a sieve of terracotta chips over an empty enamel pan](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/ac4f6af2dfb3cbb4d40d1744f7301d33575a896bbf5e73e3c3587a34eaf06f96.webp)

## Print what Bash passes to the command

Start a separate Bash session in your terminal and paste the setup at the new prompt. Keep using this session for the rest of the lab. It starts with four text files and zero CSVs in a fresh temporary directory.

```bash
env -u SHELLOPTS -u BASHOPTS bash --noprofile --norc
```

```bash
export LC_ALL=C
set +f
unset GLOBIGNORE
shopt -u nullglob failglob dotglob

lab_dir=$(mktemp -d /tmp/bash-glob.XXXXXX) || exit
cd "$lab_dir" || exit
mkdir 'week 2' || exit
touch ./alpha.txt './lab notes.txt' ./.draft.txt './week 2/second.txt' || exit

show_args() {
  printf 'argc=%s\n' "$#"
  if (( $# > 0 )); then
    printf '<%s>\n' "$@"
  fi
}
```

`argc` counts the arguments. Each pair of angle brackets marks one argument, so a space inside the brackets belongs to that filename. At zero arguments, the function prints only the count.

```bash
show_args ./*.txt
show_args './*.txt'
show_args ./*.csv
```

```text
argc=2
<./alpha.txt>
<./lab notes.txt>
argc=1
<./*.txt>
argc=1
<./*.csv>
```

The first call finds two paths. Word splitting happens before filename expansion, so `./lab notes.txt` stays in one argument. The second call quotes the whole pattern and sends `./*.txt` as written. The third has an active wildcard and zero matches, so Bash keeps `./*.csv` as written too. [GNU Bash shell expansions](https://www.gnu.org/software/bash/manual/html_node/Shell-Expansions.html)

Bash normally requires an explicit leading dot to match a name like `.draft.txt`. Enable `dotglob` to include that file in the same `./*.txt` selection. The parentheses run this block in a subshell, so `dotglob` applies only inside it. [GNU Bash filename expansion](https://www.gnu.org/software/bash/manual/html_node/Filename-Expansion.html)

```bash
(
  shopt -s dotglob
  show_args ./*.txt
)
```

```text
argc=3
<./.draft.txt>
<./alpha.txt>
<./lab notes.txt>
```

## Decide what zero matches should mean

Say the script processes reports whenever someone drops them in a directory. On a quiet day there may be none. With `nullglob`, Bash drops an unmatched pattern from the argument list. `show_args` still runs, with zero arguments.

```bash
(
  shopt -s nullglob
  show_args ./*.csv
)
```

```text
argc=0
```

If a report is required, enable `failglob`. Bash reports an expansion error and skips the `show_args` invocation. Keep the parentheses to contain the expected error, then continue at the same Bash prompt.

```bash
(
  shopt -s failglob
  show_args ./*.csv
)
```

Bash may prefix the error with the shell name or a line number.

```text
no match: ./*.csv
```

## Loop over the matches when files are optional

Some commands read standard input when they receive zero file arguments. If an empty selection means there's nothing to do, collect the matching paths in an array and run the command once per path. This block defines and runs `preview_reports`. Its parentheses contain the `nullglob` setting each time it runs.

```bash
preview_reports() (
  shopt -s nullglob
  reports=(./*.csv)
  printf 'CSV count: %s\n' "${#reports[@]}"

  for report in "${reports[@]}"; do
    show_args "$report"
  done
)
preview_reports
```

```text
CSV count: 0
```

Now add one CSV and call the same function again at the same prompt.

```bash
touch './weekly report.csv' && preview_reports
```

```text
CSV count: 1
argc=1
<./weekly report.csv>
```

An empty array gives the loop zero items. The quoted `"${reports[@]}"` expands to one word per element, and `"$report"` keeps each path together when it reaches `show_args`. For one batch invocation, check that `${#reports[@]}` is greater than zero before passing `"${reports[@]}"` to the command. That count is for matching paths, so it can include a directory whose name ends in `.csv`. [GNU Bash arrays](https://www.gnu.org/software/bash/manual/html_node/Arrays.html)

## Quote the directory and leave the wildcard active

If a directory name comes from a variable, quote that part of the word and put the wildcard outside the quotes. Try all three versions with the `week 2` directory from the setup.

```bash
folder='week 2'
show_args "./$folder"/*.txt
show_args "./$folder/*.txt"
show_args ./$folder/*.txt
```

```text
argc=1
<./week 2/second.txt>
argc=1
<./week 2/*.txt>
argc=2
<./week>
<2/*.txt>
```

The first keeps `./week 2/` together and lets Bash expand `*.txt` inside it. The second quotes the asterisk too, making it literal. In the third, Bash splits the unquoted variable expansion at the space before looking for matches. `2/*.txt` matches zero paths and survives as written under the lab's default settings. [GNU Bash shell expansions](https://www.gnu.org/software/bash/manual/html_node/Shell-Expansions.html)

With `find -name`, those quotes are intentional. Bash passes `*.txt` as one argument and `find` applies the pattern to each filename as it walks the tree. [GNU find pattern matching](https://www.gnu.org/software/findutils/manual/html_node/find_html/Shell-Pattern-Matching.html)

```bash
find . -name '*.txt' -type f -print | sort
```

```text
./.draft.txt
./alpha.txt
./lab notes.txt
./week 2/second.txt
```

The listing includes the hidden file and the file under `week 2`. See what happens when the pattern includes a directory. [Find -name vs -path](/blog/find-name-vs-path/)

## Predict the arguments before you run it

Use the same lab after creating `weekly report.csv`. For each option in the last two exercises, use its own parenthesized block as above.

1. With the lab defaults, how would you use an active wildcard to select just `./.draft.txt`?
2. Both CSV and LOG files are optional. What does `show_args ./*.csv ./*.log` print with `nullglob` enabled?
3. Both formats are required. What happens to the same call with `failglob` enabled?

### Answers

1. `show_args ./.d*.txt` prints `argc=1` and `<./.draft.txt>`. The explicit dot lets the pattern match the hidden file.
2. It prints `argc=1` and `<./weekly report.csv>`. Bash drops the unmatched LOG pattern.
3. Bash reports `no match: ./*.log` and skips the entire `show_args` call.

Type `exit` when you're done to return to your original shell.

*Prepared with AI assistance. The lab was run with Bash 3.2.57 on macOS arm64 and Bash 5.3.9 on Alpine Linux aarch64.*
