# PowerShell script to manually update Are.na notes
# Run this locally whenever you want to sync your notes

Write-Host "Fetching Are.na notes from channel: 99_notes" -ForegroundColor Cyan

try {
    # Fetch the channel contents
    Invoke-WebRequest -Uri "https://api.are.na/v2/channels/99_notes/contents?per=100" `
        -Headers @{
            "Accept" = "application/json"
            "User-Agent" = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
        } `
        -OutFile "_data/arena-notes.json"
    
    Write-Host ""
    Write-Host "Successfully fetched Are.na notes!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Next steps:" -ForegroundColor Yellow
    Write-Host "1. Review the changes: git diff _data/arena-notes.json"
    Write-Host "2. Commit and push:"
    Write-Host "   git add _data/arena-notes.json"
    Write-Host "   git commit -m 'Update Are.na notes'"
    Write-Host "   git push"
    Write-Host ""
    
} catch {
    Write-Host ""
    Write-Host "Error fetching Are.na notes:" -ForegroundColor Red
    Write-Host $_.Exception.Message
    Write-Host ""
    Write-Host "This might be due to Cloudflare protection." -ForegroundColor Yellow
    Write-Host "Try opening the API URL in your browser first:" -ForegroundColor Yellow
    Write-Host "https://api.are.na/v2/channels/99_notes/contents?per=100"
    Write-Host ""
    exit 1
}
