## Wedding RSVP Manager

This application allows the user to manage RSVPs to their wedding from a single location. Guests can respond by simply visiting the URL. They will first of all be prompted to login with pre-set credentials. Auth has been handled using [NextAuth](https://github.com/nextauthjs/next-auth).

![Login handled using NextAuth](https://res.cloudinary.com/dtirfwiy8/image/upload/v1644564783/wedding/login_pfl4kn.png)

Once logged in, users will arrive on a scrollable home page giving them all the information they need about the wedding.

![Home page 2](https://res.cloudinary.com/dtirfwiy8/image/upload/v1644566333/wedding/index-2_wl7aoo.png)

To RSVP users click on the button taking them to the RVSP form.

![User form](https://res.cloudinary.com/dtirfwiy8/image/upload/v1644564787/wedding/form_nwrfgg.png)

Form fields have been made using [Material UI](https://github.com/mui).

![User form filled](https://res.cloudinary.com/dtirfwiy8/image/upload/v1644565042/wedding/form-filled_izlgod.png)

Once submitted, guests will see a custom thank you message depending on their response. Additionally, an email will be sent to the main user containing the response. Mail out has be handled using [AWS SES](https://github.com/alistairjoelquinn/wedding-invites/blob/main/src/pages/api/submit-guest.ts).

![thanks message](https://res.cloudinary.com/dtirfwiy8/image/upload/v1644565042/wedding/thanks_prgash.png)

The application has an admin dashboard for managing responses. The main user can access this by visiting `/admin`. Two stage auth is being used to access the dashboard as in contains all user information. Without an appropriate session object, a user would be redirected before being able to enter the additional admin password.

![Admin login](https://res.cloudinary.com/dtirfwiy8/image/upload/v1644565042/wedding/admin-login_hrmrdw.png)

Having entered the admin password correctly, the main user can see each guest with their responses listed one by one.

![admin panel](https://res.cloudinary.com/dtirfwiy8/image/upload/v1644566330/wedding/admin-1_aj83fj.png)

In order to conveniently access the data the user needs, RSVPs can be filtered on certain criteria.

![admin panel filters](https://res.cloudinary.com/dtirfwiy8/image/upload/v1644566330/wedding/admin-2_poi1fd.png)