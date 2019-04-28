var initialCats = [
    {
        name: 'jetske',
        clickCount: 0,
        imgSrc: 'img/cats/jetske.jpg',
        nicknames: [
            'cat 1',
            'Tabtab',
            'T-Bone',
            'Mr. T',
            'Tabitha Tab Tabby Catty Cat'
        ]
    },
    {
        name: 'bicolour',
        clickCount: 0,
        imgSrc: 'img/cats/bicolour.jpg',
        nicknames: [
            'cat 2'
        ]
    },
    {
        name: 'chewie',
        clickCount: 0,
        imgSrc: 'img/cats/chewie.jpg',
        nicknames: [
            'cat 3'
        ]
    },
    {
        name: 'iceandfire',
        clickCount: 0,
        imgSrc: 'img/cats/iceandfire.jpg',
        nicknames: [
            'cat 4'
        ]
    },
    {
        name: 'poplinre',
        clickCount: 0,
        imgSrc: 'img/cats/poplinre.jpg',
        nicknames: [
            'cat 5'
        ] 
    },
];

// *viewmodel* - JavaScript that defines the data and behavior of your UI
function AppViewModel() {
    var self = this;

    this.catList = ko.observableArray([]);

    initialCats.forEach(function(catItem) {
        self.catList.push(new Cat(catItem));
    });

    this.switchCatClick = function(clickedCat) {
        self.currentCat(clickedCat);
        
    };

    this.currentCat = ko.observable(this.catList()[0]);

    this.incrementClicksCounter = function() {
        var previousCount = self.currentCat().clicks();
        self.currentCat().clicks(previousCount + 1);
    };
}

var Cat = function(data) {
    this.name = ko.observable(data.name);
    this.clicks = ko.observable(data.clickCount);
    this.url = ko.observable(data.imgSrc);
    this.level = ko.computed(function() {
        var title;
        var clicks = this.clicks();
        console.log(clicks);
        if (clicks < 10) {
            title = 'Newborn';
        } else if (clicks < 50) {
            title = 'Infant';
        } else if (clicks < 100) {
            title = 'Child';
        } else if (clicks < 200) {
            title = 'Teen';
        } else if (clicks < 500) {
            title = 'Adult';
        } else {
            title = 'Ninja';
        } 
    
        return title;
    }, this);
    this.nicknames = ko.observableArray(data.nicknames);
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());