@echo off
setlocal
cd /d "%~dp0"

where py >nul 2>nul
if not errorlevel 1 (
    start "Servidor local de magias" /min py -m http.server 8000 --bind 127.0.0.1
    goto abrir
)

where python >nul 2>nul
if not errorlevel 1 (
    start "Servidor local de magias" /min python -m http.server 8000 --bind 127.0.0.1
    goto abrir
)

echo Python nao foi encontrado. Instale o Python ou abra esta pasta com uma extensao de servidor local.
pause
exit /b 1

:abrir
timeout /t 2 /nobreak >nul
start "" "http://127.0.0.1:8000/"
