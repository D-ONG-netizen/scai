@echo off
set "HUB=C:\Users\DYH\Documents\ChatGPT\课本教程\freshman-hub"
cd /d "%HUB%"
powershell -NoProfile -Command "$port=Get-NetTCPConnection -LocalPort 8765 -State Listen -ErrorAction SilentlyContinue; if (-not $port) { Start-Process -FilePath 'python' -ArgumentList @('-m','http.server','8765','--directory','C:\Users\DYH\Documents\ChatGPT\课本教程\freshman-hub') -WindowStyle Hidden }"
timeout /t 1 /nobreak >nul
start "" "http://127.0.0.1:8765/index.html"
exit
