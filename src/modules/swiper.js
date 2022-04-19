import Swiper, { Autoplay } from 'swiper';


export const swiper = () => {

    const renderSwiperCards = () => {
        const swiperCardsBody = document.querySelector('.slider__wrapper')

        swiperCardsBody.innerHTML = ''

        database.forEach((item) => {
            if (item.swiper) {

                const swiperCard = document.createElement('div');
                swiperCard.setAttribute("id", `item ${item.id}`)
                swiperCard.classList.add('slider__item', 'swiper-slide')
                swiperCard.innerHTML = `
            <div class="slider__img"><img src="${item.img}" alt=""></div>
                        <div class="slider__background"></div>
                        <div class="slider__card">
                            <div class="slider__title">${item.title}</div>
                            <div class="slider__textContainer">
                                <div class="slider__text">${item.description}
                                </div>
                                <div class="slider__genres">
                                    <p>Genres</p>
                                    <p><span>${item.genres}</span></p>
                                </div>
                                <div class="slider__cast">
                                    <p>Cast</p>
                                    <p><span>${item.cast}</span></p>
                                </div>
                            </div>
                            <div class="slider__rating">
                                <img src="img/tomatometer_fresh.149b5e8adc3_34.png" alt=""><span>${item.tomato}</span><img
                                    src="img/aud_score_fresh.6c24d79faaf_37.png" alt=""><span>${item.audience}</span>
                            </div>
                        </div>
                    </div>
            `;
                swiperCardsBody.append(swiperCard);
            }
        })

    }

    renderSwiperCards();

    const swiper = new Swiper('.swiper', {
        slidesPerView: 1.4,
        spaceBetween: 37,
        centeredSlides: true,
        loop: true,
        modules: [Autoplay],
        autoplay: {
            delay: 10000,
            disableOnInteraction: false,
        },

        /*
                breakpoints: {
                    576: {
                        slidesPerView: 3,
                    }
                }
        */
    }
    );


}

