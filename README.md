# angular-rails
In Order to run the app, open each directory seperately and on the first folder run npm start in your Terminal
cd into the correct directory, cd into freelance-camp-fe
run npm start on this file
cd into the other folders seperately
run rails s -p 3001
Final folder run rails s -p 3002
All three should be running simultaneously in three different windows in your Terminal
It should be running correctly.
If everything isn't showing up run rails db:create db:migrate db:setup in both of the terminal windows where the rails applications are running. Make sure all three windows are open in the browser in order to view the full functionality.
