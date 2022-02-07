/* eslint-disable prettier/prettier */
export default (attending, fullName) =>
    attending === 'yes'
        ? `
            Dear ${fullName},<br><br>

            Thanks for RSVP-ing. We are delighted you can make it to our wedding celebration in Berlin on 27th August 2022.<br><br>
            
            We will be sending out an email in the coming months with confirmation of the day’s itinerary and other details such as dress code.<br><br>
            
            Looking forward to spending time with you!<br><br>
            
            Best Wishes<br>
            Caro and Richie
        `
        : attending === 'no'
            ? `
                Dear ${fullName},<br><br>

                Thanks for RSVP-ing. We are sorry to hear you cannot make it to our wedding celebration in Berlin on 27th August 2022.<br><br>

                We are looking into live-streaming the ceremony and will keep you posted. <br><br>

                Best Wishes<br>
                Caro and Richie
            `
            :
            `
                Dear ${fullName}, <br><br> 

                Thanks for RSVP-ing. We are glad to hear you are thinking about attending our wedding celebration in Berlin on 27th August 2022.         
            `;
