Node.js Message Board Application Hosted Here https://membership-club-336720501122.herokuapp.com/

A message board application that showcases user posts with the user names default as "Anon" for non-member users. 
Upon signing up and using the passphrase(TojiIsTheBest) to become a member, all user names will now be displayed for that account while logged in.

Utilizes Postgresql database with backend routing constructed with Express and session creation with Passport.
Passwords are encrypted via bcryptjs hash functions and then stored into a remote heroku Postgresql database.
