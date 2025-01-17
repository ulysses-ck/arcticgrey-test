# Function to convert PascalCase to kebab-case
function Convert-PascalToKebabCase {
    param([string]$str)
    
    # Insert a hyphen before any uppercase letter that follows a lowercase letter or number
    $result = $str -creplace '(?<!^)(?<![-])(?=[A-Z])', '-'
    
    # Convert to lowercase
    return $result.ToLower()
}

$componentsDir = Join-Path $PSScriptRoot ".." "app" "components"
$files = Get-ChildItem -Path $componentsDir -Filter "*.tsx"

Write-Host "Component Name Mappings:"
Write-Host "------------------------"

# Ask user what operation they want to perform
Write-Host "`nWhat would you like to do?"
Write-Host "1. Just show mappings (current behavior)"
Write-Host "2. Create new files with kebab-case names"
Write-Host "3. Rename existing files to kebab-case"

$choice = Read-Host "Enter your choice (1-3)"

foreach ($file in $files) {
    $componentName = $file.BaseName
    $kebabCase = Convert-PascalToKebabCase -str $componentName
    
    switch ($choice) {
        "1" {
            Write-Host "$componentName → $kebabCase"
        }
        "2" {
            $newFileName = "$kebabCase.tsx"
            $newFilePath = Join-Path $componentsDir $newFileName
            if (-not (Test-Path $newFilePath)) {
                Copy-Item $file.FullName $newFilePath
                Write-Host "Created: $newFileName"
            } else {
                Write-Host "Skipped: $newFileName (already exists)"
            }
        }
        "3" {
            $newFileName = "$kebabCase.tsx"
            $newFilePath = Join-Path $componentsDir $newFileName
            if ($file.Name -ne $newFileName) {
                Rename-Item $file.FullName $newFileName -Force
                Write-Host "Renamed: $($file.Name) → $newFileName"
            } else {
                Write-Host "Skipped: $($file.Name) (already in kebab-case)"
            }
        }
        default {
            Write-Host "Invalid choice. Please run the script again and select 1, 2, or 3."
            exit
        }
    }
} 