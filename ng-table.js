(function(angular, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['angular'], function(angular) {
            return factory(angular);
        });
    } else {
        return factory(angular);
    }
}(angular || null, function(angular) {
/**
 * ngTable: Table + Angular JS
 *
 * @url https://github.com/esvit/ng-table/
 */

/**
 * @ngdoc module
 * @Name ngTable
 * @description ngTable: Table + Angular JS
 * @example
   <doc:example>
     <doc:source>
        <script>
        var app = angular.module('myApp', ['ngTable']);
        app.controller('MyCtrl', function($scope) {
            $scope.users = [
                {
            "1891": "MUN",
            "1921": "MUN",
            "1933": "MUN",
            "1953": "MUN",
            "1969": "MUN",
            "1974": "MUN",
            "1981": "MUN",
            "1984": "MUN",
            "1990": "MUN",
            "1997": "MUN",
            "Running No": "1",
            "DoBIH Number": "1",
            "Streetmap": "http://www.streetmap.co.uk/newmap.srf?x=277324&y=730857&z=3&sv=277324,730857&st=4&tl=~&bi=~&lu=N&ar=y",
            "Geograph": "http://www.geograph.org.uk/gridref/NN7732430857",
            "Hill-bagging": "http://www.hill-bagging.co.uk/mountaindetails.php?qu=S&rf=1",
            "Name": "Ben Chonzie",
            "SMC Section": "1",
            "RHB Section": "01A",
            "_Section": "1.1",
            "Height (m)": "931",
            "Height (ft)": "3054",
            "Map 1:50": "51 52",
            "Map 1:25": "OL47W 368W 379W",
            "Grid Ref": "NN773308",
            "GridRefXY": "NN7732430857",
            "xcoord": "277324",
            "ycoord": "730857",
            "Post 1997": "MUN"
        },
        {
            "1891": "MUN",
            "1921": "MUN",
            "1933": "MUN",
            "1953": "MUN",
            "1969": "MUN",
            "1974": "MUN",
            "1981": "MUN",
            "1984": "MUN",
            "1990": "MUN",
            "1997": "MUN",
            "Running No": "2",
            "DoBIH Number": "17",
            "Streetmap": "http://www.streetmap.co.uk/newmap.srf?x=262911&y=718916&z=3&sv=262911,718916&st=4&tl=~&bi=~&lu=N&ar=y",
            "Geograph": "http://www.geograph.org.uk/gridref/NN6291118916",
            "Hill-bagging": "http://www.hill-bagging.co.uk/mountaindetails.php?qu=S&rf=17",
            "Name": "Ben Vorlich",
            "SMC Section": "1",
            "RHB Section": "01B",
            "_Section": "1.2",
            "Height (m)": "985",
            "Height (ft)": "3232",
            "Map 1:50": "57",
            "Map 1:25": "OL46N OL47W 365N 368W",
            "Grid Ref": "NN629189",
            "GridRefXY": "NN6291118916",
            "xcoord": "262911",
            "ycoord": "718916",
            "Post 1997": "MUN"
        },
        {
            "1891": "MUN",
            "1921": "MUN",
            "1933": "MUN",
            "1953": "MUN",
            "1969": "MUN",
            "1974": "MUN",
            "1981": "MUN",
            "1984": "MUN",
            "1990": "MUN",
            "1997": "MUN",
            "Running No": "3",
            "DoBIH Number": "18",
            "Streetmap": "http://www.streetmap.co.uk/newmap.srf?x=261746&y=717465&z=3&sv=261746,717465&st=4&tl=~&bi=~&lu=N&ar=y",
            "Geograph": "http://www.geograph.org.uk/gridref/NN6174617465",
            "Hill-bagging": "http://www.hill-bagging.co.uk/mountaindetails.php?qu=S&rf=18",
            "Name": "Stuc a' Chroin",
            "SMC Section": "1",
            "RHB Section": "01B",
            "_Section": "1.2",
            "Height (m)": "975",
            "Height (ft)": "3199",
            "Map 1:50": "57",
            "Map 1:25": "OL46N OL47W 365N 368W",
            "Grid Ref": "NN617174",
            "GridRefXY": "NN6174617465",
            "xcoord": "261746",
            "ycoord": "717465",
            "Post 1997": "MUN"
        },
        {
            "1891": "MUN",
            "1921": "MUN",
            "1933": "MUN",
            "1953": "MUN",
            "1969": "MUN",
            "1974": "MUN",
            "1981": "MUN",
            "1984": "MUN",
            "1990": "MUN",
            "1997": "MUN",
            "Running No": "4",
            "DoBIH Number": "32",
            "Streetmap": "http://www.streetmap.co.uk/newmap.srf?x=236707&y=702863&z=3&sv=236707,702863&st=4&tl=~&bi=~&lu=N&ar=y",
            "Geograph": "http://www.geograph.org.uk/gridref/NN3670702863",
            "Hill-bagging": "http://www.hill-bagging.co.uk/mountaindetails.php?qu=S&rf=32",
            "Name": "Ben Lomond",
            "SMC Section": "1",
            "RHB Section": "01C",
            "_Section": "1.3",
            "Height (m)": "974",
            "Height (ft)": "3196",
            "Map 1:50": "56",
            "Map 1:25": "OL39S 364S",
            "Grid Ref": "NN367028",
            "GridRefXY": "NN3670702863",
            "xcoord": "236707",
            "ycoord": "702863",
            "Post 1997": "MUN"
        },
        {
            "1891": "MUN",
            "1921": "MUN",
            "1933": "MUN",
            "1953": "MUN",
            "1969": "MUN",
            "1974": "MUN",
            "1981": "MUN",
            "1984": "MUN",
            "1990": "MUN",
            "1997": "MUN",
            "Running No": "5",
            "DoBIH Number": "26",
            "Streetmap": "http://www.streetmap.co.uk/newmap.srf?x=243276&y=724417&z=3&sv=243276,724417&st=4&tl=~&bi=~&lu=N&ar=y",
            "Geograph": "http://www.geograph.org.uk/gridref/NN4327624417",
            "Hill-bagging": "http://www.hill-bagging.co.uk/mountaindetails.php?qu=S&rf=26",
            "Name": "Ben More",
            "SMC Section": "1",
            "RHB Section": "01C",
            "_Section": "1.3",
            "Height (m)": "1174",
            "Height (ft)": "3852",
            "Map 1:50": "51",
            "Map 1:25": "OL46N 365N",
            "Grid Ref": "NN432244",
            "GridRefXY": "NN4327624417",
            "xcoord": "243276",
            "ycoord": "724417",
            "Post 1997": "MUN"
        },
        {
            "1891": "MUN",
            "1921": "MUN",
            "1933": "MUN",
            "1953": "MUN",
            "1969": "MUN",
            "1974": "MUN",
            "1981": "MUN",
            "1984": "MUN",
            "1990": "MUN",
            "1997": "MUN",
            "Running No": "6",
            "DoBIH Number": "27",
            "Streetmap": "http://www.streetmap.co.uk/newmap.srf?x=243481&y=722712&z=3&sv=243481,722712&st=4&tl=~&bi=~&lu=N&ar=y",
            "Geograph": "http://www.geograph.org.uk/gridref/NN4348122712",
            "Hill-bagging": "http://www.hill-bagging.co.uk/mountaindetails.php?qu=S&rf=27",
            "Name": "Stob Binnein",
            "SMC Section": "1",
            "RHB Section": "01C",
            "_Section": "1.3",
            "Height (m)": "1165",
            "Height (ft)": "3822",
            "Map 1:50": "51",
            "Map 1:25": "OL46N 365N",
            "Grid Ref": "NN434227",
            "GridRefXY": "NN4348122712",
            "xcoord": "243481",
            "ycoord": "722712",
            "Post 1997": "MUN"
        },
        {
            "1891": "TOP",
            "1921": "TOP",
            "1933": "TOP",
            "1953": "TOP",
            "1969": "TOP",
            "1974": "TOP",
            "1981": "TOP",
            "1984": "TOP",
            "1990": "TOP",
            "1997": "TOP",
            "Running No": "7",
            "DoBIH Number": "28",
            "Streetmap": "http://www.streetmap.co.uk/newmap.srf?x=243842&y=722052&z=3&sv=243842,722052&st=4&tl=~&bi=~&lu=N&ar=y",
            "Geograph": "http://www.geograph.org.uk/gridref/NN4384222052",
            "Hill-bagging": "http://www.hill-bagging.co.uk/mountaindetails.php?qu=S&rf=28",
            "Name": "Stob Binnein - Stob Coire an Lochain",
            "SMC Section": "1",
            "RHB Section": "01C",
            "_Section": "1.3",
            "Height (m)": "1068",
            "Height (ft)": "3504",
            "Map 1:50": "51",
            "Map 1:25": "OL46N 365N",
            "Grid Ref": "NN438220",
            "GridRefXY": "NN4384222052",
            "xcoord": "243842",
            "ycoord": "722052",
            "Post 1997": "TOP"
        },
        {
            "1891": "TOP",
            "Running No": "8",
            "DoBIH Number": "39",
            "Streetmap": "http://www.streetmap.co.uk/newmap.srf?x=244847&y=722468&z=3&sv=244847,722468&st=4&tl=~&bi=~&lu=N&ar=y",
            "Geograph": "http://www.geograph.org.uk/gridref/NN4484722468",
            "Hill-bagging": "http://www.hill-bagging.co.uk/mountaindetails.php?qu=S&rf=39",
            "Name": "Stob Binnein - Creag a' Bhragit",
            "SMC Section": "1",
            "RHB Section": "01C",
            "_Section": "1.3",
            "Height (m)": "923",
            "Height (ft)": "3028",
            "Map 1:50": "51",
            "Map 1:25": "OL46N 365N",
            "Grid Ref": "NN448224",
            "GridRefXY": "NN4484722468",
            "xcoord": "244847",
            "ycoord": "722468"
        },
        {
            "1891": "TOP",
            "1921": "TOP",
            "1933": "TOP",
            "1953": "TOP",
            "1969": "TOP",
            "1974": "TOP",
            "1981": "TOP",
            "1984": "TOP",
            "1990": "TOP",
            "1997": "TOP",
            "Running No": "9",
            "DoBIH Number": "33",
            "Streetmap": "http://www.streetmap.co.uk/newmap.srf?x=245051&y=722592&z=3&sv=245051,722592&st=4&tl=~&bi=~&lu=N&ar=y",
            "Geograph": "http://www.geograph.org.uk/gridref/NN4505122592",
            "Hill-bagging": "http://www.hill-bagging.co.uk/mountaindetails.php?qu=S&rf=33",
            "Name": "Stob Binnein - Meall na Dige",
            "SMC Section": "1",
            "RHB Section": "01C",
            "_Section": "1.3",
            "Height (m)": "966",
            "Height (ft)": "3169",
            "Map 1:50": "51",
            "Map 1:25": "OL46N 365N",
            "Grid Ref": "NN450225",
            "GridRefXY": "NN4505122592",
            "xcoord": "245051",
            "ycoord": "722592",
            "Post 1997": "TOP"
        },
        {
            "1891": "TOP",
            "1921": "MUN",
            "1933": "MUN",
            "1953": "MUN",
            "1969": "MUN",
            "1974": "MUN",
            "Running No": "10",
            "DoBIH Number": "29",
            "Streetmap": "http://www.streetmap.co.uk/newmap.srf?x=240815&y=721112&z=3&sv=240815,721112&st=4&tl=~&bi=~&lu=N&ar=y",
            "Geograph": "http://www.geograph.org.uk/gridref/NN4081521112",
            "Hill-bagging": "http://www.hill-bagging.co.uk/mountaindetails.php?qu=S&rf=29",
            "Name": "Cruach Ardrain SW Top",
            "SMC Section": "1",
            "RHB Section": "01C",
            "_Section": "1.3",
            "Height (m)": "1044.9",
            "Height (ft)": "3428",
            "Map 1:50": "51 56",
            "Map 1:25": "OL39N 364N",
            "Grid Ref": "NN408211",
            "GridRefXY": "NN4081521112",
            "xcoord": "240815",
            "ycoord": "721112",
            "Comments": "See named worksheet"
        },
        {
            "1891": "MUN",
            "1981": "MUN",
            "1984": "MUN",
            "1990": "MUN",
            "1997": "MUN",
            "Running No": "11",
            "DoBIH Number": "30",
            "Streetmap": "http://www.streetmap.co.uk/newmap.srf?x=240927&y=721215&z=3&sv=240927,721215&st=4&tl=~&bi=~&lu=N&ar=y",
            "Geograph": "http://www.geograph.org.uk/gridref/NN4092721215",
            "Hill-bagging": "http://www.hill-bagging.co.uk/mountaindetails.php?qu=S&rf=30",
            "Name": "Cruach Ardrain",
            "SMC Section": "1",
            "RHB Section": "01C",
            "_Section": "1.3",
            "Height (m)": "1045.9",
            "Height (ft)": "3431",
            "Map 1:50": "51 56",
            "Map 1:25": "OL39N 364N",
            "Grid Ref": "NN409212",
            "GridRefXY": "NN4092721215",
            "xcoord": "240927",
            "ycoord": "721215",
            "Post 1997": "MUN",
            "Comments": "See named worksheet"
        },
        {
            "1891": "TOP",
            "Running No": "12",
            "DoBIH Number": "40",
            "Streetmap": "http://www.streetmap.co.uk/newmap.srf?x=241285&y=721715&z=3&sv=241285,721715&st=4&tl=~&bi=~&lu=N&ar=y",
            "Geograph": "http://www.geograph.org.uk/gridref/NN4128521715",
            "Hill-bagging": "http://www.hill-bagging.co.uk/mountaindetails.php?qu=S&rf=40",
            "Name": "Cruach Ardrain - Stob Garbh SE Top",
            "SMC Section": "1",
            "RHB Section": "01C",
            "_Section": "1.3",
            "Height (m)": "923.4",
            "Height (ft)": "3030",
            "Map 1:50": "51 56",
            "Map 1:25": "OL39N 364N",
            "Grid Ref": "NN412217",
            "GridRefXY": "NN4128521715",
            "xcoord": "241285",
            "ycoord": "721715"
        },
        {
            "1891": "TOP",
            "1921": "TOP",
            "1933": "TOP",
            "1953": "TOP",
            "1969": "TOP",
            "1974": "TOP",
            "1981": "TOP",
            "1984": "TOP",
            "1990": "TOP",
            "1997": "TOP",
            "Running No": "13",
            "DoBIH Number": "34",
            "Streetmap": "http://www.streetmap.co.uk/newmap.srf?x=241112&y=722142&z=3&sv=241112,722142&st=4&tl=~&bi=~&lu=N&ar=y",
            "Geograph": "http://www.geograph.org.uk/gridref/NN4111222142",
            "Hill-bagging": "http://www.hill-bagging.co.uk/mountaindetails.php?qu=S&rf=34",
            "Name": "Cruach Ardrain - Stob Garbh",
            "SMC Section": "1",
            "RHB Section": "01C",
            "_Section": "1.3",
            "Height (m)": "957.7",
            "Height (ft)": "3142",
            "Map 1:50": "51",
            "Map 1:25": "OL39N 364N",
            "Grid Ref": "NN411221",
            "GridRefXY": "NN4111222142",
            "xcoord": "241112",
            "ycoord": "722142",
            "Post 1997": "TOP"
        },
        {
            "1891": "MUN",
            "1921": "MUN",
            "1933": "MUN",
            "1953": "MUN",
            "1969": "MUN",
            "1974": "MUN",
            "1981": "MUN",
            "1984": "MUN",
            "1990": "MUN",
            "1997": "MUN",
            "Running No": "14",
            "DoBIH Number": "31",
            "Streetmap": "http://www.streetmap.co.uk/newmap.srf?x=237873&y=719343&z=3&sv=237873,719343&st=4&tl=~&bi=~&lu=N&ar=y",
            "Geograph": "http://www.geograph.org.uk/gridref/NN3787319343",
            "Hill-bagging": "http://www.hill-bagging.co.uk/mountaindetails.php?qu=S&rf=31",
            "Name": "An Caisteal",
            "SMC Section": "1",
            "RHB Section": "01C",
            "_Section": "1.3",
            "Height (m)": "995.8",
            "Height (ft)": "3267",
            "Map 1:50": "50 56",
            "Map 1:25": "OL39N 364N",
            "Grid Ref": "NN378193",
            "GridRefXY": "NN3787319343",
            "xcoord": "237873",
            "ycoord": "719343",
            "Post 1997": "MUN"
        },
        {
            "1891": "MUN",
            "1921": "MUN",
            "1933": "MUN",
            "1953": "MUN",
            "1969": "MUN",
            "1974": "MUN",
            "1981": "MUN",
            "1984": "MUN",
            "1990": "MUN",
            "1997": "MUN",
            "Running No": "15",
            "DoBIH Number": "35",
            "Streetmap": "http://www.streetmap.co.uk/newmap.srf?x=241660&y=719604&z=3&sv=241660,719604&st=4&tl=~&bi=~&lu=N&ar=y",
            "Geograph": "http://www.geograph.org.uk/gridref/NN4166019604",
            "Hill-bagging": "http://www.hill-bagging.co.uk/mountaindetails.php?qu=S&rf=35",
            "Name": "Beinn Tulaichean",
            "SMC Section": "1",
            "RHB Section": "01C",
            "_Section": "1.3",
            "Height (m)": "945.8",
            "Height (ft)": "3103",
            "Map 1:50": "56",
            "Map 1:25": "OL46N 365N",
            "Grid Ref": "NN416196",
            "GridRefXY": "NN4166019604",
            "xcoord": "241660",
            "ycoord": "719604",
            "Post 1997": "MUN"
        },
        {
            "Running No": "16",
            "DoBIH Number": "2925",
            "Streetmap": "http://www.streetmap.co.uk/newmap.srf?x=238755&y=718573&z=3&sv=238755,718573&st=4&tl=~&bi=~&lu=N&ar=y",
            "Geograph": "http://www.geograph.org.uk/gridref/NN3875518573",
            "Hill-bagging": "http://www.hill-bagging.co.uk/mountaindetails.php?qu=S&rf=2925",
            "Name": "Beinn a' Chroin",
            "SMC Section": "1",
            "RHB Section": "01C",
            "_Section": "1.3",
            "Height (m)": "941.4",
            "Height (ft)": "3089",
            "Map 1:50": "50 56",
            "Map 1:25": "OL39N 364N",
            "Grid Ref": "NN387185",
            "GridRefXY": "NN3875518573",
            "xcoord": "238755",
            "ycoord": "718573",
            "Post 1997": "MUN",
            "Comments": "Given as the Munro on the SMC's website and its Munros CD"
        },
        {
            "1891": "MUN",
            "1921": "MUN",
            "1933": "MUN",
            "1953": "MUN",
            "1969": "MUN",
            "1974": "MUN",
            "1981": "MUN",
            "1984": "MUN",
            "1990": "MUN",
            "1997": "MUN",
            "Running No": "17",
            "DoBIH Number": "36",
            "Streetmap": "http://www.streetmap.co.uk/newmap.srf?x=239396&y=718594&z=3&sv=239396,718594&st=4&tl=~&bi=~&lu=N&ar=y",
            "Geograph": "http://www.geograph.org.uk/gridref/NN3939618594",
            "Hill-bagging": "http://www.hill-bagging.co.uk/mountaindetails.php?qu=S&rf=36",
            "Name": "Beinn a' Chroin East Top [Beinn a' Chroin]",
            "SMC Section": "1",
            "RHB Section": "01C",
            "_Section": "1.3",
            "Height (m)": "940.1",
            "Height (ft)": "3084",
            "Map 1:50": "50 56",
            "Map 1:25": "OL39N 364N",
            "Grid Ref": "NN393185",
            "GridRefXY": "NN3939618594",
            "xcoord": "239396",
            "ycoord": "718594",
            "Post 1997": "TOP",
            "Comments": "Expected to become a Top following the move of the Munro to hill 2925 above.  See http://www.hills-database.co.uk/database_notes.html#beinn_a_chroin"
        },
        {
            "1891": "TOP",
            "1921": "TOP",
            "1933": "TOP",
            "1953": "TOP",
            "1969": "TOP",
            "1974": "TOP",
            "1981": "TOP",
            "1984": "TOP",
            "1990": "TOP",
            "1997": "TOP",
            "Running No": "18",
            "DoBIH Number": "37",
            "Streetmap": "http://www.streetmap.co.uk/newmap.srf?x=238588&y=718550&z=3&sv=238588,718550&st=4&tl=~&bi=~&lu=N&ar=y",
            "Geograph": "http://www.geograph.org.uk/gridref/NN3858818550",
            "Hill-bagging": "http://www.hill-bagging.co.uk/mountaindetails.php?qu=S&rf=37",
            "Name": "Beinn a' Chroin West Top",
            "SMC Section": "1",
            "RHB Section": "01C",
            "_Section": "1.3",
            "Height (m)": "938",
            "Height (ft)": "3077",
            "Map 1:50": "50 56",
            "Map 1:25": "OL39N 364N",
            "Grid Ref": "NN385185",
            "GridRefXY": "NN3858818550",
            "xcoord": "238588",
            "ycoord": "718550",
            "Post 1997": "TOP",
            "Comments": "Expected to be deleted from the Tops; only 200m from the new Munro location (hill 2925) with c.10m of drop"
        },
        {
            "1891": "MUN",
            "1921": "MUN",
            "1933": "MUN",
            "1953": "MUN",
            "1969": "MUN",
            "1974": "MUN",
            "1981": "MUN",
            "1984": "MUN",
            "1990": "MUN",
            "1997": "MUN",
            "Running No": "19",
            "DoBIH Number": "38",
            "Streetmap": "http://www.streetmap.co.uk/newmap.srf?x=236760&y=717957&z=3&sv=236760,717957&st=4&tl=~&bi=~&lu=N&ar=y",
            "Geograph": "http://www.geograph.org.uk/gridref/NN3676017957",
            "Hill-bagging": "http://www.hill-bagging.co.uk/mountaindetails.php?qu=S&rf=38",
            "Name": "Beinn Chabhair",
            "SMC Section": "1",
            "RHB Section": "01C",
            "_Section": "1.3",
            "Height (m)": "932.1",
            "Height (ft)": "3058",
            "Map 1:50": "50 56",
            "Map 1:25": "OL39N 364N",
            "Grid Ref": "NN367179",
            "GridRefXY": "NN3676017957",
            "xcoord": "236760",
            "ycoord": "717957",
            "Post 1997": "MUN"
        }
            ];
        });
        </script>
        <table ng-table class="table">
        <tr ng-repeat="user in users">
            <td data-title="'Name'">{{user.name}}</td>
            <td data-title="'Height (ft)'">{{user.Height (ft)}}</td>
			<td data-title="'1997'">{{user.1997}}</td>
			<td data-title="'Category of Munro'">{{user.Category of Munro}}</td>
			<td data-title="'Grid Ref'">{{user.Grid Ref}}</td>
        </tr>
        </table>
     </doc:source>
   </doc:example>
 */
var app = angular.module('ngTable', []);
/**
 * ngTable: Table + Angular JS
 *
 
 * @url https://github.com/esvit/ng-table/
 */

/**
 * @ngdoc service
 * @name ngTable.factory:ngTableParams
 * @description Parameters manager for ngTable
 */
app.factory('ngTableParams', ['$q', '$log', function ($q, $log) {
    var isNumber = function (n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    };
    var ngTableParams = function (baseParameters, baseSettings) {
        var self = this;

        this.data = [];

        /**
         * @ngdoc method
         * @name ngTable.factory:ngTableParams#parameters
         * @methodOf ngTable.factory:ngTableParams
         * @description Set new parameters or get current parameters
         *
         * @param {string} newParameters      New parameters
         * @param {string} parseParamsFromUrl Flag if parse parameters like in url
         * @returns {Object} Current parameters or `this`
         */
        this.parameters = function (newParameters, parseParamsFromUrl) {
            parseParamsFromUrl = parseParamsFromUrl || false;
            if (angular.isDefined(newParameters)) {
                for (var key in newParameters) {
                    var value = newParameters[key];
                    if (parseParamsFromUrl && key.indexOf('[') >= 0) {
                        var keys = key.split(/\[(.*)\]/).reverse()
                        var lastKey = '';
                        for (var i = 0, len = keys.length; i < len; i++) {
                            var name = keys[i];
                            if (name !== '') {
                                var v = value;
                                value = {};
                                value[lastKey = name] = (isNumber(v) ? parseFloat(v) : v);
                            }
                        }
                        if (lastKey === 'sorting') {
                            params[lastKey] = {};
                        }
                        params[lastKey] = angular.extend(params[lastKey] || {}, value[lastKey]);
                    } else {
                        params[key] = (isNumber(newParameters[key]) ? parseFloat(newParameters[key]) : newParameters[key]);
                    }
                }
                $log.debug && $log.debug('ngTable: set parameters', params);
                return this;
            }
            return params;
        };

        /**
         * @ngdoc method
         * @name ngTable.factory:ngTableParams#settings
         * @methodOf ngTable.factory:ngTableParams
         * @description Set new settings for table
         *
         * @param {string} newSettings New settings or undefined
         * @returns {Object} Current settings or `this`
         */
        this.settings = function (newSettings) {
            if (angular.isDefined(newSettings)) {
                settings = angular.extend(settings, newSettings);
                $log.debug && $log.debug('ngTable: set settings', params);
                return this;
            }
            return settings;
        };

        /**
         * @ngdoc method
         * @name ngTable.factory:ngTableParams#page
         * @methodOf ngTable.factory:ngTableParams
         * @description If parameter page not set return current page else set current page
         *
         * @param {string} page Page number
         * @returns {Object|Number} Current page or `this`
         */
        this.page = function (page) {
            return angular.isDefined(page) ? this.parameters({'page': page}) : params.page;
        };

        /**
         * @ngdoc method
         * @name ngTable.factory:ngTableParams#total
         * @methodOf ngTable.factory:ngTableParams
         * @description If parameter total not set return current quantity else set quantity
         *
         * @param {string} total Total quantity of items
         * @returns {Object|Number} Current page or `this`
         */
        this.total = function (total) {
            return angular.isDefined(total) ? this.settings({'total': total}) : settings.total;
        };

        /**
         * @ngdoc method
         * @name ngTable.factory:ngTableParams#count
         * @methodOf ngTable.factory:ngTableParams
         * @description If parameter count not set return current count per page else set count per page
         *
         * @param {string} count Count per number
         * @returns {Object|Number} Count per page or `this`
         */
        this.count = function (count) {
            // reset to first page because can be blank page
            return angular.isDefined(count) ? this.parameters({'count': count, 'page': 1}) : params.count;
        };

        /**
         * @ngdoc method
         * @name ngTable.factory:ngTableParams#filter
         * @methodOf ngTable.factory:ngTableParams
         * @description If parameter page not set return current filter else set current filter
         *
         * @param {string} filter New filter
         * @returns {Object} Current filter or `this`
         */
        this.filter = function (filter) {
            return angular.isDefined(filter) ? this.parameters({'filter': filter}) : params.filter;
        };

        /**
         * @ngdoc method
         * @name ngTable.factory:ngTableParams#sorting
         * @methodOf ngTable.factory:ngTableParams
         * @description If parameter page not set return current sorting else set current sorting
         *
         * @param {string} sorting New sorting
         * @returns {Object} Current sorting or `this`
         */
        this.sorting = function (sorting) {
            if (arguments.length == 2){
                var sortArray = {};
                sortArray[sorting] = arguments[1];
                this.parameters({'sorting': sortArray});
                return this;
            }
            return angular.isDefined(sorting) ? this.parameters({'sorting': sorting}) : params.sorting;
        };

        /**
         * @ngdoc method
         * @name ngTable.factory:ngTableParams#isSortBy
         * @methodOf ngTable.factory:ngTableParams
         * @description Checks sort field
         *
         * @param {string} field     Field name
         * @param {string} direction Direction of sorting 'asc' or 'desc'
         * @returns {Array} Return true if field sorted by direction
         */
        this.isSortBy = function (field, direction) {
            return angular.isDefined(params.sorting[field]) && params.sorting[field] == direction;
        };

        /**
         * @ngdoc method
         * @name ngTable.factory:ngTableParams#orderBy
         * @methodOf ngTable.factory:ngTableParams
         * @description Return object of sorting parameters for angular filter
         *
         * @returns {Array} Array like: [ '-name', '+Height(ft)' ]
         */
        this.orderBy = function () {
            var sorting = [];
            for (var column in params.sorting) {
                sorting.push((params.sorting[column] === "asc" ? "+" : "-") + column);
            }
            return sorting;
        };

        /**
         * @ngdoc method
         * @name ngTable.factory:ngTableParams#getData
         * @methodOf ngTable.factory:ngTableParams
         * @description Called when updated some of parameters for get new data
         *
         * @param {Object} $defer promise object
         * @param {Object} params New parameters
         */
        this.getData = function ($defer, params) {
            $defer.resolve([]);
        };

        /**
         * @ngdoc method
         * @name ngTable.factory:ngTableParams#getGroups
         * @methodOf ngTable.factory:ngTableParams
         * @description Return groups for table grouping
         */
        this.getGroups = function ($defer, column) {
            var defer = $q.defer();

            defer.promise.then(function(data) {
                var groups = {};
                for (var k in data) {
                    var item = data[k],
                        groupName = angular.isFunction(column) ? column(item) : item[column];

                    groups[groupName] = groups[groupName] || {
                        data: []
                    };
                    groups[groupName]['value'] = groupName;
                    groups[groupName].data.push(item);
                }
                var result = [];
                for (var i in groups) {
                    result.push(groups[i]);
                }
                $log.debug && $log.debug('ngTable: refresh groups', result);
                $defer.resolve(result);
            });
            this.getData(defer, self);
        };

        /**
         * @ngdoc method
         * @name ngTable.factory:ngTableParams#generatePagesArray
         * @methodOf ngTable.factory:ngTableParams
         * @description Generate array of pages
         *
         * @param {boolean} currentPage which page must be active
         * @param {boolean} totalItems  Total quantity of items
         * @param {boolean} pageSize    Quantity of items on page
         * @returns {Array} Array of pages
         */
        this.generatePagesArray = function (currentPage, totalItems, pageSize) {
            var maxBlocks, maxPage, maxPivotPages, minPage, numPages, pages;
            maxBlocks = 11;
            pages = [];
            numPages = Math.ceil(totalItems / pageSize);
            if (numPages > 1) {
                pages.push({
                    type: 'prev',
                    number: Math.max(1, currentPage - 1),
                    active: currentPage > 1
                });
                pages.push({
                    type: 'first',
                    number: 1,
                    active: currentPage > 1
                });
                maxPivotPages = Math.round((maxBlocks - 5) / 2);
                minPage = Math.max(2, currentPage - maxPivotPages);
                maxPage = Math.min(numPages - 1, currentPage + maxPivotPages * 2 - (currentPage - minPage));
                minPage = Math.max(2, minPage - (maxPivotPages * 2 - (maxPage - minPage)));
                i = minPage;
                while (i <= maxPage) {
                    if ((i === minPage && i !== 2) || (i === maxPage && i !== numPages - 1)) {
                        pages.push({
                            type: 'more',
                            active: false
                        });
                    } else {
                        pages.push({
                            type: 'page',
                            number: i,
                            active: currentPage !== i
                        });
                    }
                    i++;
                }
                pages.push({
                    type: 'last',
                    number: numPages,
                    active: currentPage !== numPages
                });
                pages.push({
                    type: 'next',
                    number: Math.min(numPages, currentPage + 1),
                    active: currentPage < numPages
                });
            }
            return pages;
        };

        /**
         * @ngdoc method
         * @name ngTable.factory:ngTableParams#url
         * @methodOf ngTable.factory:ngTableParams
         * @description Return groups for table grouping
         *
         * @param {boolean} asString flag indicates return array of string or object
         * @returns {Array} If asString = true will be return array of url string parameters else key-value object
         */
        this.url = function (asString) {
            asString = asString || false;
            var pairs = (asString ? [] : {});
            for (key in params) {
                if (params.hasOwnProperty(key)) {
                    var item = params[key],
                        name = encodeURIComponent(key);
                    if (typeof item === "object") {
                        for (var subkey in item) {
                            if (!angular.isUndefined(item[subkey]) && item[subkey] !== "") {
                                var pname = name + "[" + encodeURIComponent(subkey) + "]";
                                if (asString) {
                                    pairs.push(pname + "=" + encodeURIComponent(item[subkey]));
                                } else {
                                    pairs[pname] = encodeURIComponent(item[subkey]);
                                }
                            }
                        }
                    } else if (!angular.isFunction(item) && !angular.isUndefined(item) && item !== "") {
                        if (asString) {
                            pairs.push(name + "=" + encodeURIComponent(item));
                        } else {
                            pairs[name] = encodeURIComponent(item);
                        }
                    }
                }
            }
            return pairs;
        };

        /**
         * @ngdoc method
         * @name ngTable.factory:ngTableParams#reload
         * @methodOf ngTable.factory:ngTableParams
         * @description Reload table data
         */
        this.reload = function() {
            var $defer = $q.defer(),
                self = this;

            settings.$loading = true;
            if (settings.groupBy) {
                settings.getGroups($defer, settings.groupBy, this);
            } else {
                settings.getData($defer, this);
            }
            $log.debug && $log.debug('ngTable: reload data');
            $defer.promise.then(function(data) {
                settings.$loading = false;
                $log.debug && $log.debug('ngTable: current scope', settings.$scope);
                if (settings.groupBy) {
                    self.data = settings.$scope.$groups = data;
                } else {
                    self.data = settings.$scope.$data = data;
                }
                settings.$scope.pages = self.generatePagesArray(self.page(), self.total(), self.count());
            });
        };
        
        this.reloadPages = function () {
            var self = this;
            settings.$scope.pages = self.generatePagesArray(self.page(), self.total(), self.count());
        };

        var params = this.$params = {
            page: 1,
            count: 1,
            filter: {},
            sorting: {},
            group: {},
            groupBy: null
        };
        var settings = {
            $scope: null, // set by ngTable controller
            $loading: false,
            total: 0,
            counts: [10, 25, 50, 100],
            getGroups: this.getGroups,
            getData: this.getData
        };

        this.settings(baseSettings);
        this.parameters(baseParameters, true);
        return this;
    };
    return ngTableParams;
}]);

/**
 * ngTable: Table + Angular JS
 *
 
 * @url https://github.com/esvit/ng-table/
 
 */

/**
 * @ngdoc object
 * @name ngTable.directive:ngTable.ngTableController
 *
 * @description
 * Each {@link ngTable.directive:ngTable ngTable} directive creates an instance of `ngTableController`
 */
var ngTableController = ['$scope', 'ngTableParams', '$q', function($scope, ngTableParams, $q) {
    $scope.$loading = false;

    if (!$scope.params) {
        $scope.params = new ngTableParams();
    }
    $scope.params.settings().$scope = $scope;

    $scope.$watch('params.$params', function(params) {
        $scope.params.settings().$scope = $scope;
        $scope.params.reload();
    }, true);

    $scope.sortBy = function (column) {
        var parsedSortable = $scope.parse(column.sortable);
        if (!parsedSortable) {
            return;
        }
        var sorting = $scope.params.sorting() && $scope.params.sorting()[parsedSortable] && ($scope.params.sorting()[parsedSortable] === "desc");
        var sortingParams = {};
        sortingParams[parsedSortable] = (sorting ? 'asc' : 'desc');
        $scope.params.parameters({
            sorting: sortingParams
        });
    };
}];
/**
 * ngTable: Table + Angular JS
 *
 
 * @url https://github.com/esvit/ng-table/
 
 */

/**
 * @ngdoc directive
 * @name ngTable.directive:ngTable
 * @restrict A
 *
 * @description
 * Directive that instantiates {@link ngTable.directive:ngTable.ngTableController ngTableController}.
 */
app.directive('ngTable', ['$compile', '$q', '$parse',
    function ($compile, $q, $parse) {
        'use strict';

        return {
            restrict: 'A',
            priority: 1001,
            scope: true,
            controller: ngTableController,
            compile: function (element) {
                var columns = [], i = 0, row = null;

                // custom header
                var thead = element.find('thead');

                // IE 8 fix :not(.ng-table-group) selector
                angular.forEach(angular.element(element.find('tr')), function(tr) {
                    tr = angular.element(tr);
                    if (!tr.hasClass('ng-table-group') && !row) {
                        row = tr;
                    }
                });
                if (!row) {
                    return;
                }
                angular.forEach(row.find('td'), function (item) {
                    var el = angular.element(item);
                    if (el.attr('ignore-cell') && 'true' === el.attr('ignore-cell')) {
                        return;
                    }
                    var parsedAttribute = function(attr, defaultValue) {
                        return function(scope) {
                            return $parse(el.attr('x-data-' + attr) || el.attr('data-' + attr) || el.attr(attr))(scope, {
                                $columns: columns
                            }) || defaultValue;
                        };
                    };

                    var parsedTitle = parsedAttribute('title', ' '),
                        headerTemplateURL = parsedAttribute('header', false),
                        filter = parsedAttribute('filter', false)(),
                        filterTemplateURL = false;

                    if (filter && filter.templateURL) {
                        filterTemplateURL = filter.templateURL;
                        delete filter.templateURL;
                    }

                    el.attr('data-title-text', parsedTitle()); // this used in responsive table
                    columns.push({
                        id: i++,
                        title: parsedTitle,
                        sortable: parsedAttribute('sortable', false),
                        class: el.attr('x-data-header-class') || el.attr('data-header-class') || el.attr("header-class"),
                        filter: filter,
                        filterTemplateURL: filterTemplateURL,
                        headerTemplateURL: headerTemplateURL,
                        filterData: (el.attr("filter-data") ? el.attr("filter-data") : null),
                        show: (el.attr("ng-show") ? function (scope) {
                            return $parse(el.attr("ng-show"))(scope);
                        } : function () {
                            return true;
                        })
                    });
                });
                return function (scope, element, attrs) {
                    scope.$loading = false;
                    scope.$columns = columns;

                    scope.$watch(attrs.ngTable, (function (params) {
                        if (angular.isUndefined(params)) {
                            return;
                        }
                        scope.paramsModel = $parse(attrs.ngTable);
                        scope.params = params;
                    }), true);
                    scope.parse = function (text) {
                        return angular.isDefined(text) ? text(scope) : '';
                    };
                    if (attrs.showFilter) {
                        scope.$parent.$watch(attrs.showFilter, function (value) {
                            scope.show_filter = value;
                        });
                    }
                    angular.forEach(columns, function (column) {
                        var def;
                        if (!column.filterData) {
                            return;
                        }
                        def = $parse(column.filterData)(scope, {
                            $column: column
                        });
                        if (!(angular.isObject(def) && angular.isObject(def.promise))) {
                            throw new Error('Function ' + column.filterData + ' must be instance of $q.defer()');
                        }
                        delete column['filterData'];
                        return def.promise.then(function (data) {
                            if (!angular.isArray(data)) {
                                data = [];
                            }
                            data.unshift({
                                title: '-',
                                id: ''
                            });
                            column.data = data;
                        });
                    });
                    if (!element.hasClass('ng-table')) {
                        scope.templates = {
                            header: (attrs.templateHeader ? attrs.templateHeader : 'ng-table/header.html'),
                            pagination: (attrs.templatePagination ? attrs.templatePagination : 'ng-table/pager.html')
                        };
                        var headerTemplate = thead.length > 0 ? thead : angular.element(document.createElement('thead')).attr('ng-include', 'templates.header');
                        var paginationTemplate = angular.element(document.createElement('div')).attr('ng-include', 'templates.pagination');
                        element.find('thead').remove();
                        var tbody = element.find('tbody');
                        element.prepend(headerTemplate);
                        $compile(headerTemplate)(scope);
                        $compile(paginationTemplate)(scope);
                        element.addClass('ng-table');
                        return element.after(paginationTemplate);
                    }
                };
            }
        }
    }
]);

angular.module('ngTable').run(['$templateCache', function ($templateCache) {
	$templateCache.put('ng-table/filters/select.html', '<select ng-options="data.id as data.title for data in column.data" ng-model="params.filter()[name]" ng-show="filter==\'select\'" class="filter filter-select form-control"> </select>');
	$templateCache.put('ng-table/filters/text.html', '<input type="text" ng-model="params.filter()[name]" ng-if="filter==\'text\'" class="input-filter form-control"/>');
	$templateCache.put('ng-table/header.html', '<tr> <th ng-repeat="column in $columns" ng-class="{ \'sortable\': parse(column.sortable), \'sort-asc\': params.sorting()[parse(column.sortable)]==\'asc\', \'sort-desc\': params.sorting()[parse(column.sortable)]==\'desc\' }" ng-click="sortBy(column)" ng-show="column.show(this)" ng-init="template=column.headerTemplateURL(this)" class="header {{column.class}}"> <div ng-if="!template" ng-show="!template" ng-bind="parse(column.title)"></div> <div ng-if="template" ng-show="template"><div ng-include="template"></div></div> </th> </tr> <tr ng-show="show_filter" class="ng-table-filters"> <th ng-repeat="column in $columns" ng-show="column.show(this)" class="filter"> <div ng-repeat="(name, filter) in column.filter"> <div ng-if="column.filterTemplateURL" ng-show="column.filterTemplateURL"> <div ng-include="column.filterTemplateURL"></div> </div> <div ng-if="!column.filterTemplateURL" ng-show="!column.filterTemplateURL"> <div ng-include="\'ng-table/filters/\' + filter + \'.html\'"></div> </div> </div> </th> </tr>');
	$templateCache.put('ng-table/pager.html', '<div class="ng-cloak"> <div ng-if="params.settings().counts.length" class="btn-group pull-right"> <button ng-repeat="count in params.settings().counts" type="button" ng-class="{\'active\':params.count()==count}" ng-click="params.count(count)" class="btn btn-default btn-xs"> <span ng-bind="count"></span> </button> </div> <ul class="pagination"> <li ng-class="{\'disabled\': !page.active}" ng-repeat="page in pages" ng-switch="page.type"> <a ng-switch-when="prev" ng-click="params.page(page.number)" href="">&laquo;</a> <a ng-switch-when="first" ng-click="params.page(page.number)" href=""><span ng-bind="page.number"></span></a> <a ng-switch-when="page" ng-click="params.page(page.number)" href=""><span ng-bind="page.number"></span></a> <a ng-switch-when="more" ng-click="params.page(page.number)" href="">&#8230;</a> <a ng-switch-when="last" ng-click="params.page(page.number)" href=""><span ng-bind="page.number"></span></a> <a ng-switch-when="next" ng-click="params.page(page.number)" href="">&raquo;</a> </li> </ul> </div>');
}]);
    return app;
}));