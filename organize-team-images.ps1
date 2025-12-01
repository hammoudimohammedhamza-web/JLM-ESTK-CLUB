# Script to help organize team images
# Place all 12 team member images in the public/images/team folder
# Then run this script to help rename them correctly

$teamFolder = "public\images\team"

Write-Host "Team Image Organizer" -ForegroundColor Green
Write-Host "====================" -ForegroundColor Green
Write-Host ""
Write-Host "Please ensure all 12 team member images are in: $teamFolder" -ForegroundColor Yellow
Write-Host ""
Write-Host "Required filenames:" -ForegroundColor Cyan
Write-Host "1. team-leader-aya-moumen.jpg"
Write-Host "2. vicetl-ali-bichara.jpg"
Write-Host "3. chef-de-projet-mohamed-hamza-hammoudi.jpg"
Write-Host "4. media-photographer-mohammed-chakir.jpg"
Write-Host "5. ressource-humaine-mohammed-hida.jpg"
Write-Host "6. secretaire-generale-hajar-layyadi.jpg"
Write-Host "7. chef-logistique-nasrollah-moutahir.jpg"
Write-Host "8. chef-logistique-abdelhaq-mahi.jpg"
Write-Host "9. sponsoring-mohamed-yassine-lachhab.jpg"
Write-Host "10. communication-aya-elabisy.jpg"
Write-Host "11. tresorerie-sara-aabida.jpg"
Write-Host "12. jlm-junior-aya-abid.jpg"
Write-Host ""

if (Test-Path $teamFolder) {
    $images = Get-ChildItem -Path $teamFolder -Include *.jpg,*.jpeg,*.png
    Write-Host "Found $($images.Count) image(s) in the team folder" -ForegroundColor $(if ($images.Count -eq 12) { "Green" } else { "Yellow" })
    
    if ($images.Count -gt 0) {
        Write-Host ""
        Write-Host "Current images:" -ForegroundColor Cyan
        $images | ForEach-Object { Write-Host "  - $($_.Name)" }
    }
} else {
    Write-Host "Team folder not found: $teamFolder" -ForegroundColor Red
}

Write-Host ""
Write-Host "Once you've added all 12 images with the correct filenames, the website will display them correctly!" -ForegroundColor Green

