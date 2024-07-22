/// <reference types="../@types/jquery" />





AOS.init();

// ************************************************ Side Navbar  ************************************************



function openNav() {
    $('.side-nav').animate({ left: 0 }, 500)

    $('.open-nav-icon').removeClass('fa-bars')
    $('.open-nav-icon').addClass('fa-x')
    for (let i = 0; i < 5; i++) {
        $(".links li").eq(i).animate({
            top: 0
        }, (i + 5) * 100)
    }
}

function closeNav() {
    let boxWidth = $('.side-nav .nav-tap').outerWidth()
    $('.side-nav').animate({
        left: -boxWidth
    }, 500)

    $('.open-nav-icon').addClass('fa-bars')
    $('.open-nav-icon').removeClass('fa-x')
    $('.links li').animate({
        top: 300
    }, 500)
}
closeNav();

$('.open-nav-icon').click(() => {
    if ($('.side-nav').css('left') == '0px') {
        closeNav()
    } else {
        openNav()
    }
})
// ************************************************ Navbar  ************************************************





// ************************************************ now playing   ************************************************
// search

let container = [];



function searchItem() {
    let term = $('#searchInput').val();
    let box = ``;
    for (let i = 0; i < container.length; i++) {
        if (container[i].title.toLowerCase().includes(term.toLowerCase())) {

            box += `
        <div class="item overflow-hidden relative group rounded-md  ">
                    <div class="cardImage " data-aos="fade-up">
                        <img src="https://image.tmdb.org/t/p/w500/${container[i].poster_path}"
                            class="w-full h-auto transition-all duration-1000">
                    </div>
                    <div class="overlay absolute inset-0 flex flex-col justify-start items-center text-white px-4  ">
                        <h1 class="title py-10">${container[i].title}</h1>
                        <p class="desc py-10  ">${container[i].overview}</p>
                        <p class="date "><span class="fst-normal">Release Date: <span>${container[i].release_date}</span></span></p>
                        <h3 class="rate "><i class="fa-solid fa-star text-warning fs-6"></i><i
                                class="fa-solid fa-star text-warning fs-6"></i><i
                                class="fa-solid fa-star text-warning fs-6"></i><i
                                class="fa-regular fa-star-half-stroke text-warning fs-6"></i></h3>
                        <h3 class="vote rounded-full p-4 border-4 border-green-600 mt-10">${container[i].vote_average}</h3>
                    </div>
                </div>
        `
        }
    }
    document.getElementById('display').innerHTML = box;

}





getPlaying();


$('.playing').on('click', function () {
    getPlaying();

})
async function getPlaying() {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YWNmNGYxZWIyYTQ3Y2E1NGQ3MTMwMmQ0NTNmN2JhNyIsIm5iZiI6MTcyMTUxOTk0OS4xNDczOTgsInN1YiI6IjY2OWM0ZGZhNWMwMGYyN2Q1MDA1ZDlmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._KpHrbygx-tXbxx_w8CTYDEwNVm3MGSc1uNuo23oLns'
        }
    };
    const res = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
    const data = await res.json()
    const newRes = await data.results
    container = newRes
    displayMovies();
}
// ************************************************ Popular   ************************************************
$('.popular').on('click', function () {
    getPopular();
})
async function getPopular() {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YWNmNGYxZWIyYTQ3Y2E1NGQ3MTMwMmQ0NTNmN2JhNyIsIm5iZiI6MTcyMTUxOTk0OS4xNDczOTgsInN1YiI6IjY2OWM0ZGZhNWMwMGYyN2Q1MDA1ZDlmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._KpHrbygx-tXbxx_w8CTYDEwNVm3MGSc1uNuo23oLns'
        }
    };

    const res = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
    const data = await res.json()
    const newRes = await data.results
    container = newRes
    displayMovies();

}
// ************************************************ Top rated   ************************************************
$('.rated').on('click', function () {
    getTopRated();
})
async function getTopRated() {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YWNmNGYxZWIyYTQ3Y2E1NGQ3MTMwMmQ0NTNmN2JhNyIsIm5iZiI6MTcyMTY0MzA1MS45NDY2OTEsInN1YiI6IjY2OWM0ZGZhNWMwMGYyN2Q1MDA1ZDlmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ozhucWqrI5yd4iiLsOPLrquKac71NV0eNq8lupVysyg'
        }
    };

    const res = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    const data = await res.json()
    const newRes = await data.results
    container = newRes
    displayMovies();
}







// // ************************************************ Trinding   ************************************************

$('.trending').on('click', function () {
    getTrending();
})


async function getTrending() {
    const res = await fetch('https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44')
    const data = await res.json();
    const newRes = await data.results

    container = newRes
    displayMovies();
}
// // ************************************************ UpComing   ************************************************
$('.upcoming').on('click', function () {
    getUpcoming();
}
)
async function getUpcoming() {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YWNmNGYxZWIyYTQ3Y2E1NGQ3MTMwMmQ0NTNmN2JhNyIsIm5iZiI6MTcyMTUxOTk0OS4xNDczOTgsInN1YiI6IjY2OWM0ZGZhNWMwMGYyN2Q1MDA1ZDlmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._KpHrbygx-tXbxx_w8CTYDEwNVm3MGSc1uNuo23oLns'
        }
    };

    const res = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
    const data = await res.json()
    const newRes = await data.results



    container = newRes
    displayMovies();
}




function displayMovies() {
    let box = ``;
    for (let i = 0; i < container.length; i++) {
        box += `
        <div class="item overflow-hidden relative group rounded-md  ">
                    <div class="cardImage " data-aos="fade-up">
                        <img src="https://image.tmdb.org/t/p/w500/${container[i].poster_path}"
                            class="w-full h-auto transition-all duration-1000">
                    </div>
                    <div class="overlay absolute inset-0 flex flex-col justify-start items-center text-white px-4  ">
                        <h1 class="title py-10">${container[i].title}</h1>
                        <p class="desc py-10  ">${container[i].overview}</p>
                        <p class="date "><span class="fst-normal">Release Date: <span>${container[i].release_date}</span></span></p>
                        <h3 class="rate "><i class="fa-solid fa-star text-warning fs-6"></i><i
                                class="fa-solid fa-star text-warning fs-6"></i><i
                                class="fa-solid fa-star text-warning fs-6"></i><i
                                class="fa-regular fa-star-half-stroke text-warning fs-6"></i></h3>
                        <h3 class="vote rounded-full p-4 border-4 border-green-600 mt-10">${container[i].vote_average}</h3>
                    </div>
                </div>
        `
    }
    document.getElementById('display').innerHTML = box;

}



// regex 
$('form').on('submit', function (e) {
    e.preventDefault();
})

$('#name').on('input', function () {
    const regex = /^[a-z][a-z\s.'-]{5,49}$/;

    if (regex.test($(this).val())) {
        console.log("tmam");

        $('.alertName').addClass('hidden')
        $('.alertName').removeClass('block')
    } else {
        console.log("msh tmam");
        $('.alertName').removeClass('hidden')
        $('.alertName').addClass('block')

    }
});
$('#email').on('input', function () {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (regex.test($(this).val())) {
        console.log("tmam");

        $('.alertEmail').addClass('hidden')
        $('.alertEmail').removeClass('block')
    } else {
        console.log("msh tmam");
        $('.alertEmail').removeClass('hidden')
        $('.alertEmail').addClass('block')

    }
});
$('#phone').on('input', function () {
    const regex = /^\d{8}$/;

    if (regex.test($(this).val())) {
        console.log("tmam");

        $('.alertphone').addClass('hidden')
        $('.alertphone').removeClass('block')
    } else {
        console.log("msh tmam");
        $('.alertphone').removeClass('hidden')
        $('.alertphone').addClass('block')

    }
});
$('#age').on('input', function () {
    const regex = /^(1[0-9]|[2-7][0-9]|80)$/;

    if (regex.test($(this).val())) {
        console.log("tmam");

        $('.alertage').addClass('hidden')
        $('.alertage').removeClass('block')
    } else {
        console.log("msh tmam");
        $('.alertage').removeClass('hidden')
        $('.alertage').addClass('block')

    }
});
const password = document.getElementById('password').value;
const repassword = document.getElementById('repassword').value;

$('#password').on('input', function () {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (regex.test($(this).val())) {
        console.log("tmam");

        $('.alertpassword').addClass('hidden')
        $('.alertpassword').removeClass('block')

    } else {
        console.log("msh tmam");

        $('.alertpassword').removeClass('hidden')
        $('.alertpassword').addClass('block')

    }
});
$('#repassword').on('input', function () {
    if (password === repassword) {
        $('.alertrepassword').addClass('hidden')
        $('.alertrepassword').removeClass('block')
    } else {
        $('.alertrepassword').removeClass('hidden')
        $('.alertrepassword').addClass('block')
    }
});



var scrollToTopBtn = document.getElementById("scrollToTopBtn");
var rootElement = document.documentElement;

function scrollToTop() {
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
scrollToTopBtn.addEventListener("click", scrollToTop);

$(function () {
    $('.loader').fadeOut(1000, function () {
        $('.loading').slideUp(1000)
    })
})



$('.contact-us-li').on('click', function () {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });
});
