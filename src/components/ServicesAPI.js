const Servicesdata = [
    {
        id: '1',
        title: 'Frontend Development',
        description: 'Designing responsive, user-friendly websites using modern web technologies',
        img: 'https://i.ibb.co/zHHLM2F/2150062008-1.jpg',
        link:'https://www.w3schools.com/whatis/whatis_frontenddev.asp#:~:text=A%20Front-End%20Developer%20is%20someone%20who%20creates%20websites,of%20Front-End%20as%20client-side%20and%20Back-End%20as%20server-side.'
    },
    {
        id: '2',
        title: 'Backend Development',
        description: 'Developing scalable, secure server-side applications with APIs and databases.',
        img: 'https://i.ibb.co/mHKnRT9/3642-1.jpg',
        link:'https://www.freecodecamp.org/news/back-end-developer/'
    },
    {
        id: '3',
        title: 'Accounts',
        description: 'Managing finances, bookkeeping, tax returns, and ensuring compliance efficiently.',
        img: 'https://i.ibb.co/bRv0BJz/75837-1.jpg',
        link:'https://www.myaccountingcourse.com/accounting-dictionary/account'
    }
]

const ServicesShuffledArray=(e)=>{
    for(let i=e.length-1; i>0; i--){
        const j=Math.floor(Math.random()*(i+1));
        [e[i], e[j]]=[e[j], e[i]];
    }
    return e;
}
const shuffledServicesById=(services)=>{
    const shuffledServices=ServicesShuffledArray(services);
    shuffledServices.forEach((services, index) => {
        services.id=(index+1).toString()
    });
    return shuffledServices;
}
const shffledServices=shuffledServicesById(Servicesdata);
const PureServicesData=shffledServices.sort((a, b)=>{return a-b});

export default PureServicesData;