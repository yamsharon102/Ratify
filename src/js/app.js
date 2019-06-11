var x = "";



function setArtistMap()
{
    var artistMap = new Map();
    artistMap.set("Ariana_Grande", "Born\n" +
        "26 June 1993, Boca Raton, FL, United States\n\n" +
        "Currently\n" +
        "New York, NY, United States\n\n" +
        "Also Known As\n" +
        "Ariana Grande-Butera [birth name]\n\n" +
        "Genres\n" +
        "Contemporary R&B, Dance-Pop, Electropop, Pop, Synthpop, Pop Rap");
    artistMap.set("Imagine_Dragons", "Formed\n" +
        "2008, Las Vegas, NV, United States\n\n" +
        "Members\n" +
        "Dan Reynolds (lead vocals, rhythm guitar, piano, keyboards, drums, percussion), Dave Lemke (bass, backing vocals, 2008–09), Andrew Beck (guitar, backing vocals, 2008), Aurora Florence (piano, keyboards, backing vocals, violin, 2008), D. Wayne Sermon (lead guitar, backing vocals, mandolin, 2009-present), Ben McKee (bass, backing vocals, piano, keyboards, synthesizer, 2009-present), Andrew Tolman (drums, percussion, backing vocals, rhythm guitar, 2008–11), Brittany Tolman (piano, keyboards, backing vocals, rhythm guitar, 2009–11), Daniel Platzman (drums, percussion, backing vocals, rhythm guitar, viola, keyboards, 2011–present), Theresa Flaminio (piano, keyboards, backing vocals, 2011–12)\n" +
        "\nRelated Artists\n" +
        "The Moth & The Flame\n" +
        "\nGenres\n" +
        "Pop Rock, Electropop, Alternative Rock, Indie Pop, Film Soundtrack, Pop Rap");
    artistMap.set("JP_Cooper", "Born\n" +
        "2 November 1983, Middleton, Greater Manchester, United Kingdom\n" +
        "\nAlso Known As\n" +
        "John Paul Cooper [birth name]");
    artistMap.set("Khalid",
        "Born\n" +
        "11 February 1998, Fort Stewart, GA, United States\n" +
        "\nCurrently\n" +
        "El Paso, TX, United States\n" +
        "\nAlso Known As\n" +
        "Khalid Donnel Robinson [birth name]\n" +
        "\nGenres\n" +
        "Alternative R&B, Contemporary R&B, Electropop, Pop, Chamber Pop, Film Soundtrack");
    artistMap.set("Maroon5", "Formed\n" +
        "2001, Los Angeles, CA, United States\n" +
        "\nMembers\n" +
        "Adam Levine (vocals, guitar), James Valentine (guitar), Jesse Carmichael (keyboards, vocals), Mickey Madden (bass), Ryan Dusick (drums, vocals, 2001-06), Matt Flynn (drums, 2006-present), PJ Morton (keyboards, piano, backing vocals, 2012-present), Sam Farrar (guitar, keyboards, synthesizer, percussion, bass, 2016-present)\n" +
        "\nRelated Artists\n" +
        "Operation Aloha\n" +
        "\nAlso Known As\n" +
        "Kara's Flowers [1994-2001], Maroon [2001]\n" +
        "\nGenres\n" +
        "Pop Rock, Pop, Dance-Pop, Electropop, Contemporary R&B, Tropical House");
    artistMap.set("Queen","Formed\n" +
        "27 June 1970, London, Greater London, United Kingdom\n" +
        "\nMembers\n" +
        "Brian May (vocals, guitar, piano, ukulele, synthesizer), Roger Taylor (vocals, drums, percussion, synthesizer, guitar, bass), Freddie Mercury (vocals, piano, synthesizer, guitar, programming, 1970-91), Mike Grose (bass, 1970), Barry Mitchell (bass, 1970-71), Doug Bogie (bass, 1971), John Deacon (bass, rhythm guitar, synthesizer, 1971-98)\n" +
        "\nRelated Artists\n" +
        "Queen + Adam Lambert, Queen + Paul Rodgers, Smile\n" +
        "\nGenres\n" +
        "Hard Rock, Pop Rock, Glam Rock, Art Rock, Rock, Film Soundtrack");
    return artistMap;
}

function getName(l) {
    var myMap = new Map();
    myMap.set("Ariana_Grande", "Ariana Grande");
    myMap.set("Imagine_Dragons", "Imagine Dragons");
    myMap.set("JP_Cooper", "JP Cooper");
    myMap.set("Khalid", "Khalid");
    myMap.set("Maroon5", "Maroon 5");
    myMap.set("Queen","Queen");

    return myMap.get(l);
}

function getRate(l) {
    var myMap = new Map();
    myMap.set("Ariana_Grande", "4.5");
    myMap.set("Imagine_Dragons", "4.6");
    myMap.set("JP_Cooper", "4.3");
    myMap.set("Khalid", "4.8");
    myMap.set("Maroon5", "4.3");
    myMap.set("Queen","4.5");

    return myMap.get(l);
}

function getURL(l) {
    var myMap = new Map();

    myMap.set("Ariana_Grande", ["https://www.youtube.com/embed/SXiSVQZLje8", "https://www.youtube.com/embed/gl1aHhXnN1k","https://www.youtube.com/embed/QYh6mYIJG2Y"]);
    myMap.set("Imagine_Dragons", ["https://www.youtube.com/embed/7wtfhZwyrcc","https://www.youtube.com/embed/fKopy74weus","https://www.youtube.com/embed/ktvTqknDobU"]);
    myMap.set("JP_Cooper", ["https://www.youtube.com/embed/9ORWF5RkdO0","https://www.youtube.com/embed/gDeWucjm_JE","https://www.youtube.com/embed/cSeR2ztk9SY"]);
    myMap.set("Khalid", ["https://www.youtube.com/embed/56WBK4ZK_cw","https://www.youtube.com/embed/IPfJnp1guPc","https://www.youtube.com/embed/tk36ovCMsU8"]);
    myMap.set("Maroon5", ["https://www.youtube.com/embed/09R8_2nJtjg","https://www.youtube.com/embed/aJOTlE1K90k","https://www.youtube.com/embed/5Wiio4KoGe8"]);
    myMap.set("Queen",["https://www.youtube.com/embed/fJ9rUzIMcZQ","https://www.youtube.com/embed/HgzGwKwLmgM","https://www.youtube.com/embed/rY0WxgSXdEE"]);

    return myMap.get(l);
}

function addComment()
{
    var parameters = location.search.substring(1).split("&");

    var temp = parameters[0].split("=");
    l = unescape(temp[1]);
    var artistMap = setArtistMap();
    var thisArt = artistMap.get(l);
    //
    // temp = parameters[1].split("=");
    // c = unescape(temp[1]);
    x = l;
    var urlArr = getURL(l);
    document.getElementById("log").innerHTML = getName(l);
    document.getElementById("img").src = "./imgs/"+l+".jpg";
    document.getElementById("rate").innerText = getRate(l);
    document.getElementById("description").innerText = thisArt;
    document.getElementById("movie1").src = urlArr[0];
    document.getElementById("movie2").src = urlArr[1];
    document.getElementById("movie3").src = urlArr[2];


    // document.getElementById("pass").innerHTML = c;
}
addComment();