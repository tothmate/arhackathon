module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "Augmented Reality Hackathon",
      description: "",
      date: "April 10-11",
      // If your event is free, just comment this line
      //price: "$100",
      venue: "Prezi.com office",
      address: "54-56 Nagymező Street",
      city: "Budapest",
      state: "Hungary"
    },

    // The Call To Action button at the header,
    // If you don't want this, just remove the callToAction property.
    callToAction: {
        text: "Apply now!",
        link: "#apply"
    },

    // "Fork me on GitHub", if you don't want this, just remove the forkButton property
    //forkButton: {
    //    repository: "https://github.com/braziljs/conf-boilerplate"
    //},

    // Site info
    site: {
      theme: "yellow-swan",
      url: "http://arhackathon.tothmate.com",
      //googleanalytics: "UA-33656081-1"
    },

    // Active sections on the website
    // to deactivate comment out with '//'
    // you can also change order here and it will reflect on page
    sections: [
      'about',
      'apply',
      'location',
      'schedule',
       //'speakers',
      'sponsors',
      'contact'
      //'partners'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "About",
      location: "Location",
      speakers: "Speakers",
      schedule: "Schedule",
      sponsors: "Organizers",
      partners: "Partners",
      contact: "Contact",
      apply: "Apply now!"
    },

    // The entire schedule
    schedule: [
      {
        name: "Schedule coming soon!",
        time: "9h00"
      }
    ],

    // List of Sponsors
    sponsors: [
      {
        name: "Prezi",
        logo: "http://prezi-a.akamaihd.net/press-versioned/86-7ef007f78239be96c00c4a58ead74b327f07efb7/press/img/kit/prezi_logos/prezi_vertical.png",
        url: "http://prezi.com"
      },
      {
        name: "360world",
        logo: "https://fbcdn-sphotos-a-a.akamaihd.net/hphotos-ak-prn2/v/t1.0-9/560372_10150869408967253_848834056_n.jpg?oh=a2e7076da8b6900198559376c0aad4dc&oe=55501A7D&__gda__=1432644823_ce04522f0b87e13c521531aa71cab81d",
        url: "http://360world.eu"
      }
    ],

    // List of Partners
    partners: [
      {
        name: "BrazilJS",
        logo: "themes/yellow-swan/img/partner.png",
        url: "http://braziljs.org"
      }
    ],

    // Theme path
    getTheme: function() {
      return "themes/" + this.site.theme;
    },

    // Site Path
    getUrl: function() {
    	return this.site.url;
    }
  }
};
