$ErrorActionPreference = "Stop"

$projectDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$schematic = Join-Path $projectDir "auto-door-unlocker.kicad_sch"
$outDir = Join-Path $projectDir "export"
New-Item -ItemType Directory -Force -Path $outDir | Out-Null

$candidatePaths = @()
if ($env:KICAD_CLI) {
  $candidatePaths += $env:KICAD_CLI
}
$candidatePaths += @(
  "C:\Program Files\KiCad\9.0\bin\kicad-cli.exe",
  "C:\Program Files\KiCad\8.0\bin\kicad-cli.exe",
  "C:\Program Files\KiCad\7.0\bin\kicad-cli.exe",
  "$env:LOCALAPPDATA\Programs\KiCad\9.0\bin\kicad-cli.exe",
  "$env:LOCALAPPDATA\Programs\KiCad\8.0\bin\kicad-cli.exe"
)

$kicadCliCommand = Get-Command kicad-cli -ErrorAction SilentlyContinue
$kicadCli = if ($kicadCliCommand) { $kicadCliCommand.Source } else { $null }
if (-not $kicadCli) {
  $kicadCli = $candidatePaths | Where-Object { $_ -and (Test-Path -LiteralPath $_) } | Select-Object -First 1
}
if (-not $kicadCli) {
  throw @"
kicad-cli was not found.

Install KiCad 8+ from https://www.kicad.org/download/windows/ and reopen PowerShell, or set KICAD_CLI manually:

  `$env:KICAD_CLI = "C:\Program Files\KiCad\9.0\bin\kicad-cli.exe"
  powershell -ExecutionPolicy Bypass -File public\schematics\kicad\auto-door-unlocker\export.ps1
"@
}

& $kicadCli sch export svg `
  --output $outDir `
  --no-background-color `
  --exclude-drawing-sheet `
  $schematic

& $kicadCli sch export pdf `
  --output (Join-Path $outDir "auto-door-unlocker.pdf") `
  --exclude-drawing-sheet `
  $schematic

Write-Host "Exported schematic files to $outDir"
