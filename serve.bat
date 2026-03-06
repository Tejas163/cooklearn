@echo off
echo ============================================
echo   CookLearn AI - Landing Page Server
echo ============================================
echo.

cd /d "%~dp0"

echo Starting web server on port 8080...
echo Open your browser to: http://localhost:8080
echo.
echo Press Ctrl+C to stop the server
echo.

python -m http.server 8080
