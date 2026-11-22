---
title: "Fix Anki’s “No Usable Temporary Folder Found” Error"
description: "Anki won’t open on Windows or Mac? Check whether its temp folder can hold a test file, then try a fresh temp folder for one launch."
date: "2026-11-22"
image: "https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/09763595142939339080f6052ae43397b60c1dfc604b7953e4130b07023328d9.webp"
keywords:
  - "Anki no usable temporary folder found"
  - "Anki temp folder error"
  - "Anki temporary folder permissions"
---

When desktop Anki says **“No usable temporary folder found,”** quit it and check the drive that holds its temp folder. If the drive is full, free some space and open Anki again. If there’s space and the error returns, try writing a tiny file to the temp folder, then launch Anki with a fresh one.

Anki checks for a usable temp folder before it opens your collection. The English dialog mentions `C:\temp` on both Windows and Mac because they share the same message. Anki keeps your decks and study history in a separate data folder. [Anki’s startup check](https://github.com/ankitects/anki/blob/26.09.4/qt/aqt/__init__.py#L768-L777) · [Dialog text](https://github.com/ankitects/anki/blob/26.09.4/ftl/qt/qt-misc.ftl#L64) · [Anki’s data folder](https://docs.ankiweb.net/manual/files#user-data)

To check free space, go to **Settings → System → Storage** on Windows or **System Settings → General → Storage** on Mac. If you moved temporary files to another drive, check that drive too. [Windows storage settings](https://support.microsoft.com/en-us/windows/experience/storage-filemanagement/storage-settings-in-windows) · [Mac storage settings](https://support.apple.com/en-us/102624)

![A printmaker clips a blue test strip to a line beside a stack of finished prints](https://czaixyl0esghkd4s.public.blob.vercel-storage.com/marketing/09763595142939339080f6052ae43397b60c1dfc604b7953e4130b07023328d9.webp)

## Check whether you can write to the temp folder

Anki asks Python to find a usable temp folder. Python checks the paths set in `TMPDIR`, `TEMP`, and `TMP` in that order, then tries default locations. A failed path can be skipped if a later one works. The commands below show your shell’s settings and test its first candidate. They create, write, and remove one small file. [Python’s temp folder search order](https://docs.python.org/3.14/library/tempfile.html#tempfile.gettempdir)

### Windows PowerShell

From Start, open PowerShell under the account you use for Anki and paste the whole block.

```powershell
& {
    "TMPDIR=$env:TMPDIR"
    "TEMP=$env:TEMP"
    "TMP=$env:TMP"
    $folder = @($env:TMPDIR, $env:TEMP, $env:TMP, "$env:LOCALAPPDATA\Temp") |
        Where-Object { $_ } | Select-Object -First 1
    "Checking $folder"
    $item = Get-Item -LiteralPath $folder -Force -ErrorAction Stop
    if (-not $item.PSIsContainer) { throw "Path is a file: $folder" }
    $name = "anki-temp-check-$([guid]::NewGuid()).txt"
    $probe = New-Item -Path $folder -Name $name -ItemType File -ErrorAction Stop
    try {
        Set-Content -LiteralPath $probe.FullName -Value 'Anki temp check' -ErrorAction Stop
    } finally {
        Remove-Item -LiteralPath $probe.FullName -ErrorAction Stop
    }
    "Write and removal worked in $folder"
}
```

### macOS Terminal

Open Terminal and paste the whole block.

```sh
printf 'TMPDIR=%s\nTEMP=%s\nTMP=%s\n' "$TMPDIR" "$TEMP" "$TMP"
check_dir="${TMPDIR:-${TEMP:-${TMP:-/tmp}}}"
printf 'Checking %s\n' "$check_dir"
if probe=$(mktemp "${check_dir%/}/anki-temp-check.XXXXXXXX"); then
    if printf '%s\n' 'Anki temp check' > "$probe"; then
        rm -- "$probe" && printf 'Write and removal worked in %s\n' "$check_dir"
    else
        rm -- "$probe"
    fi
fi
```

Look at the path printed after `Checking` and the message below it.

- **Missing path or path is a file.** If you use an external drive for temporary files, reconnect it and retry. If the path is an old custom setting, the launch test below can help narrow down the problem.
- **Permission denied or access denied.** The account you’re using couldn’t complete the check at that path. On a work or school computer, give IT the path and the error so they can check your access. [Anki’s notes on temp-folder permissions](https://docs.ankiweb.net/manual/files#permissions-of-temp-folder)
- **No space left on device.** Free space on the drive that holds the printed path, then rerun the check.
- **Write and removal worked.** Your shell could use that folder for a small file. Anki can receive different settings when you open it from Start or the Dock. If the dialog still appears there, try the launch test.

## Try a fresh temp folder for one launch

Dismiss the error and make sure Anki is fully closed. These commands create a folder inside your user account and open Anki directly so it receives the temp settings for the test.

### Windows

Open a **new** PowerShell window. If you installed Anki somewhere else, use the full path to your `Anki.exe` in the first line inside the block. The new temp settings apply to this PowerShell window and the processes it starts. [Anki’s default install location](https://docs.ankiweb.net/manual/files#program-files) · [PowerShell process environment](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_environment_variables)

```powershell
& {
    $anki = "$env:LOCALAPPDATA\Programs\Anki\Anki.exe"
    if (-not (Test-Path -LiteralPath $anki -PathType Leaf)) {
        throw "Anki executable not found at $anki"
    }
    $name = "anki-temp-test-$([guid]::NewGuid())"
    $fresh = New-Item -Path $env:LOCALAPPDATA -Name $name -ItemType Directory -ErrorAction Stop
    "Test folder: $($fresh.FullName)"
    $env:TMPDIR = $fresh.FullName
    $env:TEMP = $fresh.FullName
    $env:TMP = $fresh.FullName
    Start-Process -FilePath $anki -Wait -ErrorAction Stop
}
```

### macOS

If Anki is outside Applications, replace `/Applications/Anki.app` with the full path to the app inside the quotes. The temp settings apply to the Anki command on that line. [Anki’s Terminal launch instructions](https://docs.ankiweb.net/addons/console-output.md)

```sh
if fresh=$(mktemp -d "$HOME/anki-temp-test.XXXXXXXX"); then
    printf 'Test folder: %s\n' "$fresh"
    TMPDIR="$fresh" TEMP="$fresh" TMP="$fresh" "/Applications/Anki.app/Contents/MacOS/anki"
fi
```

If you still see the same dialog, dismiss it and run the write check again in the same shell window. On Windows, `TMPDIR` already points to the test folder. On Mac, replace the `check_dir=` line with `check_dir="$fresh"`. If the folder passes the write check and Anki still won’t open, share the result, the exact error, and your Anki and OS versions with [Anki support](https://forums.ankiweb.net/).

## Get back to your usual Anki shortcut

If Anki opened with the fresh folder, quit it, close the test shell, and open Anki the way you normally do. If the dialog comes back and you’ve confirmed a custom temp path is stale, correct it where you originally set it. On Windows, this might be a user-level variable under **Edit environment variables for your account**. On Mac, it might be a launcher script you use to start Anki. Point that setting to an existing folder your account can write to and retry from your usual shortcut. If the path is managed by IT, tell them whether Anki opened with the fresh folder. [Windows user environment variables](https://learn.microsoft.com/en-us/windows/win32/shell/user-environment-variables)

After you quit the test launch, you can remove the folder printed as `Test folder`. Once Anki opens normally, check your usual profile and open a familiar deck. If you’re in the right profile and a deck is missing, see [how to recover a missing Anki deck](/blog/recover-deleted-anki-deck/).

## How this was checked

An isolated test ran the startup check from Anki 26.09.4 with CPython 3.14.7 on macOS 26.6.1. A missing folder or a file in place of the only candidate triggered the dialog branch. With a writable folder later in the search order, the check passed. Both write checks worked in a folder with spaces and reported errors for a missing folder and a path to a file. Those tests ran on macOS, including the PowerShell check with PowerShell 7.7.0. The Windows launch command follows the release and installation documentation.

This article was written with AI assistance.
