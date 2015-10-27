if(Meteor.isClient) {
  Meta.config({
      options: {
        // Meteor.settings[Meteor.settings.environment].public.meta.title
        title: 'La Mosca',
        suffix: 'Comunicación y eventos'
      }
  });
}
