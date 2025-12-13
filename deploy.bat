@echo off
echo Building BrokerFlow App...
call npm run build

echo.
echo Build complete! 
echo.
echo To deploy to Vercel:
echo 1. Install Vercel CLI: npm i -g vercel
echo 2. Run: vercel --prod
echo.
echo Or upload the 'build' folder to any static hosting service.
echo.
pause