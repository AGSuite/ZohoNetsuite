# Script to add quality={75} to all Image components with fill prop
# This fixes hydration mismatch errors

$files = Get-ChildItem -Path "app" -Filter "*.tsx" -Recurse

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    
    # Pattern to find <Image ... fill ... without quality
    # This regex looks for Image tags with fill but NOT quality
    if ($content -match '<Image[^>]*\bfill\b[^>]*>') {
        Write-Host "Checking: $($file.FullName)"
        
        # Add quality={75} after sizes= if it exists, or before />
        $updated = $content -replace '(<Image[^>]*\bfill\b[^>]*sizes="[^"]*")(\s*\n\s*)(/>)', '$1$2quality={75}$2$3'
        $updated = $updated -replace '(<Image[^>]*\bfill\b[^>]*)(/>)(?!.*quality)', '$1quality={75}$2$2'
        
        if ($updated -ne $content) {
            Set-Content -Path $file.FullName -Value $updated -NoNewline
            Write-Host "Updated: $($file.FullName)" -ForegroundColor Green
        }
    }
}

Write-Host "Done!" -ForegroundColor Cyan
