---
title: "How to Set the Awk Field Separator to a Pipe"
description: "Use awk -F '|' to split on literal pipes, keep an empty middle field, and export the front and back of each note as tab-separated columns."
date: "2026-11-28"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/908c4893df729a915b454b9e3fb03a69a65acf82077eefecbdd78f1a2781fdb9.webp"
keywords:
  - "awk field separator"
  - "awk -F pipe"
  - "awk FS and OFS"
  - "awk empty fields"
  - "awk tab output"
---

In `red fox||renard roux`, the two pipes leave room for a blank hint. With a literal pipe as the awk field separator, `red fox` lands in `$1`, the empty hint in `$2`, and `renard roux` in `$3`. Match the two pipes as a single separator and the answer slips into `$2`.

For a file named `cards.psv` with rows in `front|hint|back` order, this command prints the front and back with a tab between them. Make the sample below if you want to try it as written.

```sh
awk -F '|' -v OFS='\t' '{ print $1, $3 }' cards.psv
```

![A baker sets a bread roll in a muffin tin with the center wells empty](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/908c4893df729a915b454b9e3fb03a69a65acf82077eefecbdd78f1a2781fdb9.webp)

## Make a three-note sample

Create a temporary directory in your shell. Run the remaining commands from there.

```sh
lab=$(mktemp -d "${TMPDIR:-/tmp}/awk-fields.XXXXXX") &&
  cd "$lab" &&
  cat > cards.psv <<'DATA'
train station|transport|gare
red fox||renard roux
apple tree|outside|pommier
DATA
```

The sample uses plain text with one note per line, LF line endings, and two pipes per row. Start with a note on the first line. Reserve pipes for field boundaries and keep tabs and line breaks out of field values. If your source file is CSV with quoted commas or multiline fields, use a CSV parser that understands quoting. [GNU Awk manual on CSV fields](https://www.gnu.org/software/gawk/manual/gawk.html#Comma-Separated-Fields)

## See what happens to the empty field

Print the line number (`NR`), field count (`NF`), and third field (`$3`). The default field separator, `FS`, is a single space with a special meaning. Awk splits on runs of whitespace, so the spaces in the notes become field boundaries.

```sh
awk '{ printf "%d %d <%s>\n", NR, NF, $3 }' cards.psv
```

```text
1 2 <>
2 3 <roux>
3 2 <>
```

Set `FS` with `-F '|'` and show all three fields. The single quotes keep the shell from treating the pipe as a pipeline operator. Awk treats a one-character `FS` like `|` as a literal delimiter, so each pipe creates a boundary. [GNU Awk field-splitting summary](https://www.gnu.org/software/gawk/manual/gawk.html#Field-Splitting-Summary)

```sh
awk -F '|' '{ printf "%d %d <%s> <%s> <%s>\n", NR, NF, $1, $2, $3 }' cards.psv
```

```text
1 3 <train station> <transport> <gare>
2 3 <red fox> <> <renard roux>
3 3 <apple tree> <outside> <pommier>
```

The brackets show where each field starts and ends. On line 2, `<>` is the empty `$2`. The spaces in `red fox` and `renard roux` stay inside their fields.

Now try `[|]+` as the field separator. That regular expression matches one or more pipes at a time, so `||` counts as one separator.

```sh
awk -F '[|]+' '{ printf "%d %d <%s>\n", NR, NF, $3 }' cards.psv
```

```text
1 3 <gare>
2 2 <>
3 3 <pommier>
```

Line 2 now has two fields. The answer has moved to `$2`, so an export of `$1` and `$3` would give `red fox` an empty back. Printing boundaries also helps when the values you're passing around are filenames. [Find -exec vs xargs lab](/blog/find-exec-vs-xargs/)

## Check the rows before exporting

A third field that prints empty can mean a separator is missing or that the back itself is empty. A row with one pipe too many is a different problem because `$3` can look fine on its own. Try these three examples.

```sh
cat > malformed.psv <<'DATA'
red fox|renard roux
red fox||
red fox||renard|roux
DATA

awk -F '|' '{ printf "%d %d <%s>\n", NR, NF, $3 }' malformed.psv
```

```text
1 2 <>
2 3 <>
3 4 <renard>
```

Line 1 has two fields, so `$3` is missing. Line 2 has three fields and an empty `$3`. Line 3 has four fields, with `roux` in `$4`.

Define this function in the same shell. For each line, it checks for three fields, a front and back with values, and the absence of tabs. The middle field can be empty.

```sh
validate() {
  awk -F '|' '
    NF != 3 || $1 == "" || $3 == "" || /\t/ {
      printf "Check line %d (NF=%d)\n", NR, NF
      bad = 1
    }
    END { if (bad) exit 1 }
  ' "$1"
}
```

Run `validate malformed.psv`. It exits with status 1 and reports all three rows.

```text
Check line 1 (NF=2)
Check line 2 (NF=3)
Check line 3 (NF=4)
```

## Write the front and back as TSV

`FS` controls how awk reads the input fields. `OFS` controls what goes between the items in `print`. The comma in `print $1, $3` gives `print` two items, so `OFS='\t'` puts a tab between them. With `print $1 $3`, awk joins the fields into one string and you get `red foxrenard roux`. Bare `print` writes the whole original record in this example, pipes included. [GNU Awk manual on `print`](https://www.gnu.org/software/gawk/manual/gawk.html#Print) and [output separators](https://www.gnu.org/software/gawk/manual/gawk.html#Output-Separators)

Use `&&` to start the export only when the check passes. The parentheses give `set -C` a subshell, where it makes `>` refuse to overwrite an existing regular file.

```sh
validate cards.psv && (
  set -C
  awk -F '|' -v OFS='\t' '{ print $1, $3 }' cards.psv > cards.tsv
)
```

Read the file back with a tab as the input separator. Each line should have two fields, with the French answer in the second one.

```sh
awk -F '\t' '{ printf "%d %d <%s> <%s>\n", NR, NF, $1, $2 }' cards.tsv
```

```text
1 2 <train station> <gare>
2 2 <red fox> <renard roux>
3 2 <apple tree> <pommier>
```

If you're going on to update existing Anki notes, the next step is to check how Anki matches the incoming rows. Try that with a separate comma-separated example. [Anki CSV update rehearsal](/blog/anki-csv-update-existing-notes/)

## Predict the next run

1. For `paper plane||avion en papier`, what are `NF` and `$3` with `-F '|'`? What are they with `-F '[|]+'`?
2. For `paper plane||`, why does the validator reject a row with `NF=3`?
3. You're getting `paper planeavion en papier` with `OFS` already set to a tab. What change to `print` gives you two tab-separated fields?

### Answers

1. With `-F '|'`, `NF` is 3 and `$3` is `avion en papier`. With `-F '[|]+'`, `NF` is 2 and `$3` is empty because the translation moved to `$2`.
2. The third field exists and is empty. Every back needs a value.
3. Use `print $1, $3`. The comma gives `print` two items, so it inserts the tab between them.

*AI assisted with research, writing, and verification. The sample commands were run with Apple awk 20200816 on macOS 26.6.1, mawk 1.3.4 on Debian 13.7, and BusyBox awk 1.37.0 on Alpine 3.24.4.*
