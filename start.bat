@echo off
echo ============================================
echo   CookLearn AI - Meal Planning Platform
echo ============================================
echo.

echo Starting Mealie container...
docker start mealie

echo.
echo Waiting for Mealie to start...
timeout /t 10 /nobreak >nul

echo.
echo ============================================
echo   CookLearn AI is ready!
echo ============================================
echo.
echo Access your app at: http://localhost:9925
echo.
echo To stop: docker stop mealie
echo To view logs: docker logs mealie
echo.
pause
