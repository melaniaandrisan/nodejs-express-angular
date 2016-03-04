app.service('modelInfo', function() {
    this.getModelData = function () {
        return "Here we will make the call to the server and return data";
    }

    this.getNames = function(){
      var names = [
        {name:'Jani',country:'Norway'},
        {name:'Carl',country:'Sweden'},
        {name:'Margareth',country:'England'},
        {name:'Hege',country:'Norway'},
        {name:'Joe',country:'Denmark'},
        {name:'Gustav',country:'Sweden'},
        {name:'Birgit',country:'Denmark'},
        {name:'Mary',country:'England'},
        {name:'Kai',country:'Norway'}
      ];
      return names;
    }

    this.getCountries = function(){
      var countries = [
        { country: 'Norway'},
        {country: 'Sweden'},
        {country:'England'},
        {country:'Denmark'}
      ];

      return countries;
    }
});
