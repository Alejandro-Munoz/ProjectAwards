/**
 * Created by Alejandro on 7/12/2015.
 */


document.addEventListener('DOMContentLoaded',function(){

    var currentWinner = {

        url:'./images/CurrentWinner/currentWinner.jpeg',
        date:'Sunday 12, July',
        name:'Piaget Possession',
        author: 'By 84.Paris',
        country: '(France)',
        grades: [7.29,7.29,7.29,7.43],
        average:7.50,
        likes:22,
        description: 'Digital experience for an icon of Piaget jewelry, the Possession ring cultivates its uniqueness through a harmonious blend of aesthetics and sensuality. The ring embodies the creative boldness of Piaget and serves as a source of inspiration as it turns on your finger.',
        jury: ['./images/CurrentWinner/jury/henry-daubrez.jpg',
                './images/CurrentWinner/jury/lucas.jpg',
                './images/CurrentWinner/jury/lukeli.jpg',
                './images/CurrentWinner/jury/malte-gruhl.jpg',
                './images/CurrentWinner/jury/michidelrosso.jpg',
                './images/CurrentWinner/jury/stefano.jpg',
                './images/CurrentWinner/jury/users.jpg'
                ]
    };

    var nominees = [
        {
            title:'LAST NOMINEES',
            subtitle:'We need your vote',
            nomineeImg:'./images/LastNominees/Citak.jpeg',
            nomineeSite:'Tavares',
            nomineeCompany:'Landscape',
            nomineeCountry:'U.S.A.',
            nomineeLikes:'7',
            nomineeDeadline:'3'

        },
        {
            title:'<br> ',
            subtitle:' ',
            nomineeImg:'./images/LastNominees/guido.jpeg',
            nomineeSite:'Sete Tres',
            nomineeCompany:'Guilherme Pangnotta',
            nomineeCountry:'Brazil',
            nomineeLikes:'15',
            nomineeDeadline:'3'
        },
        {
            title:'DEVELOPER AWARD',
            subtitle:'Every Wednesday',
            nomineeImg:'./images/LastNominees/karim.jpg',
            nomineeSite:'Karim Rashid',
            nomineeCompany:'Anton & Irene',
            nomineeCountry:'U.S.A.',
            nomineeLikes:'70',
            nomineeDeadline:''
        }
    ];

    var trendies = [
        {
            title:'TRENDING SITES',
            subtitle:'View all sites',
            trendieImg:'./images/TrendingSites/11.jpeg',
            trendieSite:'Fivefootsix',
            trendieCompany:'Roll Studio',
            trendieCountry:'United Kingdom',
            trendieLikes:'36',
            trendieGrade:'7.09',
            trendieDate:'June 11, 2015'

        },
        {
            title:'<br>',
            subtitle:'',
            trendieImg:'./images/TrendingSites/amelia.jpg',
            trendieSite:'Interactive Haiku',
            trendieCompany:'National Filmboard of Canada',
            trendieCountry:'Canada',
            trendieLikes:'10',
            trendieGrade:'',
            trendieDate:'June 09, 2015'
        },
        {
            title:'<br>',
            subtitle:'',
            trendieImg:'./images/TrendingSites/selene.jpeg',
            trendieSite:'Dream Team Katarzyna Konkowska',
            trendieCompany:'BrightMedia',
            trendieCountry:'Poland',
            trendieLikes:'153',
            trendieGrade:'7.76',
            trendieDate:'Mayo 14, 2015'
        }
    ];

    var blogs = [
        {
            title:'Blog',
            subtitle:'',
            blogImg:'./images/Blog/awwwards-conference-2016.jpg',
            blogTopic:'Awwwards Conference 2016',
            blogIssue:'Amsterdam & New York City',
            blogDesc:'Tickets available now for Awwwards '
        },
        {
            title:'<br>',
            subtitle:'',
            blogImg:'./images/Blog/thumbnail-cartelle-awwwards.jpg',
            blogTopic:'Meet Cartelle',
            blogIssue:'Interviews',
            blogDesc:'Cartelle is a digital founded in 2009.'
        },
        {
            title:'<br>',
            subtitle:'',
            blogImg:'./images/Blog/creative-portfolio-upd-cover.jpg',
            blogTopic:'20 Unique and Creative Web Portfolios',
            blogIssue:'The Best Articles / Web Design',
            blogDesc:'There is a large amount'
        },
        {
            title:'<br>',
            subtitle:'',
            blogImg:'./images/Blog/claudio-thumb.jpg',
            blogTopic:'Interview with Claudio Guglieri ',
            blogIssue:'Interviews',
            blogDesc:'Claudio Guglieri is an '
        }
    ];

    console.log(currentWinner);

    listWinner(currentWinner);

    listNominees(nominees);

    listTrendy(trendies);

    listBlogs(blogs);

    function listWinner(winner){
        var ul = document.getElementById('photoWinner');
        //ul.innerHTML = '';
        // create an li element for photo
        var liPhoto = createElement('li', ul, '', '');
        // create an image element
        createElement('img', liPhoto, '', '', {
            'src': winner.url
        });
        // create an li element for info
        var liInfo = createElement('li', ul);
        // info elements
        createElement('h2', liInfo, '', winner.date);
        createElement('h2', liInfo, 'winnerName', winner.name);
        var author = createElement('h2', liInfo, 'info', winner.author);
        //number of likes
        var likes = createElement('h2',author, 'right', winner.likes);
        //heart image
        createElement('img', likes, 'right', '',{'src':'./images/icons/heartgrey.png'});
        //horizontal
        createElement('hr', liInfo);
        //divs for grades
        var grades = createElement('div', liInfo,'gradesContainer clearfix');

        var grade1 = createElement('div', grades,'grades grade1',winner.grades[0]);
        createElement('h2', grade1,'','Design',{'height':'10px'});
        var grade2 = createElement('div', grades,'grades grade2',winner.grades[1]);
        createElement('h2', grade2,'','Usability',{'height':'10px'});
        var grade3 = createElement('div', grades,'grades grade3',winner.grades[2]);
        createElement('h2', grade3,'','Creativity',{'height':'10px'});
        var grade4 = createElement('div', grades,'grades grade4',winner.grades[3]);
        createElement('h2', grade4,'','Content',{'height':'10px'});
        var gradeAvg = createElement('div', grades,'grades gradeAvg right',winner.average);
        createElement('h2', gradeAvg,'','Average',{'height':'10px'});
        //horizontal
        //createElement('hr',liInfo);
        var ulJury = createElement('ul', liInfo, 'jury','');
        for (var i=0;i<winner.jury.length;i++)
        {
            var li = createElement('li',ulJury)
            var hyperJury = createElement('a',li,'');
            createElement('img',hyperJury,'jury','',{'src': winner.jury[i]})
        }
        //horizontal
        createElement('hr',liInfo);
        //description
        createElement('p',liInfo,'winnerDesc',winner.description);

    }

    function listNominees(nominees){
        var ulNominees = document.getElementById('nominees');

        for (var i=0;i<nominees.length;i++)
        {
            var li = createElement('li',ulNominees)

            var h2 = createElement('h2',li,'nomineetitle',nominees[i].title.bold() + ' ' + nominees[i].subtitle);
            var hyperNominee = createElement('a',li,'');
            createElement('img',hyperNominee,'nominee','',{'src': nominees[i].nomineeImg});

            var nomineeCompanyName = createElement('h2',li,'nomineeCompanyName',nominees[i].nomineeSite.bold());
            var nomineeLikes = createElement('h2',nomineeCompanyName,'right',nominees[i].nomineeLikes);
            //heart image
            createElement('img', nomineeLikes, 'right', '',{'src':'./images/icons/heartgrey.png'});

            createElement('h2',li,'nomineeCountry','By '+ '<a>' +
                                nominees[i].nomineeCompany + '</a>' + ' from ' + nominees[i].nomineeCountry);
        }

    }

    function listTrendy(trendies){
        var ulTrendies = document.getElementById('trendies');

        for (var i=0;i<trendies.length;i++)
        {
            //li element
            var li = createElement('li',ulTrendies)
            //title
            var h2 = createElement('h2',li,'trendietitle',trendies[i].title.bold() + ' ' + trendies[i].subtitle);
            //Image
            var hyperTrendie = createElement('a',li,'');
            createElement('img',hyperTrendie,'trendie','',{'src': trendies[i].trendieImg});
            //Company name
            var trendieCompanyName = createElement('h2',li,'trendieCompanyName',trendies[i].trendieSite.bold());
            //No. Likes
            var trendieLikes = createElement('h2',trendieCompanyName,'right',trendies[i].trendieLikes);
            //heart image
            createElement('img', trendieLikes, 'right', '',{'src':'./images/icons/heartgrey.png'});
            //Country
            createElement('h2',li,'trendieCountry','By '+ '<a>' +
                trendies[i].trendieCompany + '</a>' + ' from ' + trendies[i].trendieCountry);
            //Date
            var trendieDate = createElement('h2',li,'trendieDate',trendies[i].trendieDate);

        }

    }

    function listBlogs(blogs){
        var ulBlogs = document.getElementById('blogs');

        for (var i=0;i<blogs.length;i++)
        {
            //li element
            var li = createElement('li',ulBlogs)
            //title
            var h2 = createElement('h2',li,'blogtitle',blogs[i].title.bold() + ' ' + blogs[i].subtitle);
            //Image
            var hyperBlog = createElement('a',li,'');
            createElement('img',hyperBlog,'blog','',{'src': blogs[i].blogImg});
            //Company name
            var blogTopic = createElement('h2',li,'blogTopic',blogs[i].blogTopic.bold());
            //No. Likes
            var blogIssue = createElement('h2',li,'blogIssue',blogs[i].blogIssue);
            //description
            var blogDesc = createElement('h2',li,'blogDesc',blogs[i].blogDesc);

        }

    }

    function listRepos(arr_repos) {

        var ul = document.getElementById('sectionLastNominees');
        ul.innerHTML = '';

        if (!Array.isArray(arr_repos)) arr_repos = Array.prototype.slice.call(arr_repos);
        arr_repos.forEach(function (repo) {
            // create an li element
            var li = createElement('li', ul, '', '');
            // create an image element
            createElement('img', li, '', '', {
                'src': repo.owner.avatar_url
            });
            // create a hyperlink
            createElement('a', li, '', repo.name, {
                'href': 'http://github.com/' + repo.name,
                'target': '_blank'
            });
        });
    }
});

function createElement(elementType, parent, className, innerHTML, custom) {
    var element = document.createElement(elementType);
    if (parent) parent.appendChild(element);
    if (className) element.className = className;
    if (innerHTML) element.innerHTML = innerHTML;

    if (typeof custom !== 'undefined') {
        for (var prop in custom) {
            element.setAttribute(prop, custom[prop]);
        }
    }

    return element;
}


