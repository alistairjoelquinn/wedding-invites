## Wedding RSVP Manager

This application allows the user to manage RSVPs to their wedding from a single location. Guests can respond by simply visiting the URL. They will first of all be prompted to login with pre-set credentials. Auth has been handled using [NextAuth](https://github.com/nextauthjs/next-auth).

![Login handled using NextAuth](https://res.cloudinary.com/dtirfwiy8/image/upload/v1644564783/wedding/login_pfl4kn.png)

Once logged in, users will arrive on a scrollable home page giving them all the information they need about the wedding.

![Home page 2](https://res.cloudinary.com/dtirfwiy8/image/upload/v1644566333/wedding/index-2_wl7aoo.png)

To RSVP users click on the button taking them to the RVSP form.

![User form](https://res.cloudinary.com/dtirfwiy8/image/upload/v1644565042/wedding/form-filled_izlgod.png)

Form fields have been made using [Material UI](https://github.com/mui).

![User form filled](https://res.cloudinary.com/dtirfwiy8/image/upload/v1644565042/wedding/form-filled_izlgod.png)

Once submitted, guests will see a custom welcome message depending on their response. Additionally, and email will be sent to the main user informing them a response has been sent and informing them of it's contents. Mail out has be handled using [AWS SES](https://github.com/alistairjoelquinn/wedding-invites/blob/main/src/pages/api/submit-guest.ts).

![thanks message](https://res.cloudinary.com/dtirfwiy8/image/upload/v1644565042/wedding/thanks_prgash.png)

The application also has an admin dashboard for managing responses. When the main user visits the `/admin` route they are presented with an additional admin password to enter in order to be able to access the dashboard. Two stage auth is being used to access user information a this his page would first of all redirect before being able to enter an admin password without an appropriate session.

![Admin login](https://res.cloudinary.com/dtirfwiy8/image/upload/v1644565042/wedding/admin-login_hrmrdw.png)

Once on the admin dashboard, the main user can see each guest with their response details list one by one.

![admin panel](https://res.cloudinary.com/dtirfwiy8/image/upload/v1644566330/wedding/admin-1_aj83fj.png)

In order to conveniently access the data the user needs, RSVPs can be filter on certain criteria.

![admin panel filters](https://res.cloudinary.com/dtirfwiy8/image/upload/v1644566330/wedding/admin-2_poi1fd.png)