import React, { useState, useEffect } from 'react';
import Loader from './Loader';
import ReactPaginate from 'react-paginate';

const GearData = [{
  id: '1',
  title: 'Dell inspiron 3500',
  description: 'I brought this laptop to my earning in 2022. I was thought to much than i decided to purchase the laptop for the purpose of learn program. It is really not getting desappoint me.',
  imglink: 'https://i.ibb.co/8D9ZYsX/laptop.jpg',
  shoplink: 'https://www.amazon.in/Dell-Inspiron-Graphics-Anti-Glare-D560790WIN9BE/dp/B09TNY95RK/ref=sr_1_5?crid=2RE3KZHNATNM6&keywords=Inspiron%2B3505%2B8gb%2Bram%2B256gb%2Bssd%2B1tb%2Bhdd%2Bamd%2Bryzen%2B5&qid=1692538285&s=computers&sprefix=inspiron%2B3505%2B8gb%2Bram%2B256gb%2Bssd%2B1tb%2Bhdd%2Bamd%2Bryzen%2B5%2Ccomputers%2C297&sr=1-5&th=1',
  buttonTitle: 'view on amazon'
}, {
  id: '2',
  title: 'Zeb mouse',
  description: 'This is a very nice affordable gaming mouse. At around 349 INR, it is a lot of value for money!',
  imglink: 'https://i.ibb.co/h1sxPQ2/mouse.jpg',
  shoplink: 'https://www.amazon.in/Zebronics-Zeb-Transformer-M-Optical-Gaming-Effect/dp/B0819HZPXL/ref=sr_1_2?crid=BZVZ8PRWAIVD&keywords=zeb%2Bmouse&qid=1692533628&sprefix=zeb%2Bmous%2Caps%2C688&sr=8-2&th=1',
  buttonTitle: 'view on amazon'
},
{
  id: '3',
  title: 'Zeb-DLK-01',
  description: 'I bought this when i did not have any external keyboard.Its is literally good for basic segment. Actually I tired roughly this keyborad but it do not have any complaint.',
  imglink: 'https://i.ibb.co/YtfFvPB/keyboard.jpg',
  shoplink: 'https://www.amazon.in/Zebronics-DLK01-Multimedia-Keyboard-White/dp/B07RT67LV1/ref=sr_1_16?crid=7S5KTCINMXVY&keywords=keyboard&qid=1692533108&sprefix=keyboar%2Caps%2C368&sr=8-16&th=1',
  buttonTitle: 'view on amazon'
},
{
  id: '4',
  title: 'HP Matel Drive',
  description: 'This is a very nice affordable for store files. I mainly using for store project file, for install windiows and other Applications At around 499 INR, it is a lot of value for money!',
  imglink: 'https://i.ibb.co/nP4hWLw/pendrive.jpg',
  shoplink: 'https://www.amazon.in/HP-FD236W-32GB-Drive-Gray/dp/B01L8ZL3X8/ref=sr_1_2?crid=1MVFOSFKUNYJY&keywords=hp+32gb+pendrive+metal+body+v232w&qid=1692539068&sprefix=hp+32gb+pendrive+metal+body+v232w%2Caps%2C829&sr=8-2',
  buttonTitle: 'view on amazon'

},
{
  id: '5',
  title: 'Crucial Ex-SSD',
  description: 'Space for all my favorites: Perfect for backups. 2TB holds up to 10,000 photos, 30 hours of family video, four AAA game titles, and 100GB of documents, with 200GB to spare',
  imglink: 'https://i.ibb.co/rdC9k4z/ssd2.jpg',
  shoplink: 'https://www.amazon.in/Crucial%C2%AE-X9-1TB-Portable-SSD/dp/B0CGW1FQV4/ref=pd_sbs_d_sccl_3_5/260-7129376-0868716?pd_rd_w=qNdUj&content-id=amzn1.sym.716ad392-9d85-4575-b34c-e8d1201b1a5a&pf_rd_p=716ad392-9d85-4575-b34c-e8d1201b1a5a&pf_rd_r=S74FXTGQBQTXZMW9S66M&pd_rd_wg=SLnSw&pd_rd_r=764c3692-af33-4398-9019-15e74f3a4a4c&pd_rd_i=B0CGW1FQV4&th=1',
  buttonTitle: 'shop on amazon'
},
{
  id: '6',
  title: 'Ulrta ProLink',
  description: 'This external USB laptop hub expands connectivity options, providing multiple USB ports for connecting peripherals like keyboards, mice, and external drives. It simplifies multitasking by allowing simultaneous device connections, enhancing productivity and convenience for any laptop setup.',
  imglink: 'https://i.ibb.co/x6NFgMt/hub2.jpg',
  shoplink: 'https://www.amazon.in/UltraProlink-iExpand-Keyboard-External-Smartphones/dp/B09C29274B/ref=sr_1_12?crid=1UE8O0HH0QF1S&dib=eyJ2IjoiMSJ9.wfrBtQmQbJGY6CEOA44Yk5Tgh8DbeitilCExpjBGtYBVB6lhGBcsxIoajbrvYwnaNWc_ghvOZJUR2-DVft6pvomZMLlapkF0FZ07Arog69-PP5mgVe886Y_nHf8L-7FdVGOvAbfkTMd4cGK37JgCfnH5MNnvITR5W8LEgpAn8k65BkQF2NJxQ98Td836vNqXY34GqdXBv0HP1nAYdAAjnaKgn_ez1aUOu43C9aQMSWh1aZFo4Ojqa_J56yOT4Erm9AtIfIIC9R6aFTFSWHcawHWKnWQxPjV-Lfez_7jkw5k.6jYAP035DJou4LzN8QYvxiu3uU-vYUS6YJExoZidg9I&dib_tag=se&keywords=external%2Bhub&qid=1725640148&refinements=p_36%3A87000-220000&rnid=1318502031&sprefix=extanal%2Bhu%2Caps%2C299&sr=8-12&th=1',
  buttonTitle: 'shop on amazon'
},
{
  id: '7',
  title: 'Call of Duty Warfare',
  description: 'Call of Duty: Modern Warfare is a first-person shooter game that delivers intense and realistic combat. Set in modern times, it features a gripping single-player campaign and fast-paced multiplayer modes. The game emphasizes tactical gameplay, realistic graphics, and a variety of weapons and equipment, offering an immersive experience for both casual and competitive players.',
  imglink: 'https://i.ibb.co/pKs8w1x/codw.jpg',
  shoplink: 'https://www.amazon.in/Call-Duty-Warfare-Standard-PlayStation/dp/B0BJF4HD6C/ref=sr_1_2?crid=3RSYE88MGXOV3&dib=eyJ2IjoiMSJ9.YQJdrwWymTcrCAe8jVulh07I26JCIF8Nis-7Z4GJSVk6KVIBky7knl1clKT4oCezHwQpCt70DnK_pJwb7HKwt5ofsaGBiqPvDQgycE3QGd7htn_DgcHGy6Hq90Nm_Ir6A3cBpy9OXFa39rg1WPelxjyAAMBXiGkCH8AsXhq_UexB8LRNRdnB-VZzt53oyFFLNBA-6TyZWtKpXzlxeEblRctpEq-keWdqVmWi-QwpPIA.ulsk_qWdAgL_0Se-IIM_-Qt3U_iP3N_gPi9YhNZuaU0&dib_tag=se&keywords=call+of+duty+warfare+3&qid=1725640666&sprefix=call+of+duty+warf%2Caps%2C338&sr=8-2',
  buttonTitle: 'view on amazon'
},
{
  id: '8',
  title: 'Samsung A9 Tab',
  description: 'The Samsung Galaxy Tab A9 features a sleek 22.10 cm (8.7 inch) display, providing an immersive viewing experience perfect for watching videos, reading, or browsing the web. With 4 GB RAM and 64 GB of internal storage (expandable via microSD), it offers smooth multitasking and ample space for apps, photos, and videos. ',
  imglink: 'https://i.ibb.co/Ycg4L32/tab3.jpg',
  shoplink: 'https://www.amazon.in/Samsung-Galaxy-Tab-A9-Expandable/dp/B0CJ37223B/ref=sr_1_2?crid=HD173PZXJ92G&dib=eyJ2IjoiMSJ9.EYwy3qQ2GVgAJ7jzBCf9YJkLfp1AHsO1dkJz28R8vawSmKKosN0rg36WVkX8nFVkU9824xLGjyXuG0lfMb9RoJhjTPbw815FiEH8t5Lme7__QfPpdepE6DJJorWGuDUfygixhr40duUVVDdin_6orXCuEHPRc_jNwZWjw7RODqrabFa5iP5kHY0KTI8nQKa8d5mxn09FAwgfmnhJT16waVuvkkFIA6ESV9qjVNLWBFI.FAVTRHnzBa8U-zW3tJv6uF-ELjz90FJVD9JIS7MWr9Q&dib_tag=se&keywords=samsung+galaxy+a14+tab&qid=1725640730&sprefix=samsung+galaxy+a14+tab%2Caps%2C310&sr=8-2',
  buttonTitle: 'view on amazon'
},
{
  id: '9',
  title: 'Dyazo 6',
  description: 'This is laptop stand. It is very good product for laptop. It gives me right view for laptop screen and it gives good ventilation for laptop',
  imglink: 'https://i.ibb.co/y4gGGn0/stand.jpg',
  shoplink: 'https://www.amazon.in/Dyazo-Computer-Adjustable-Ergonomic-Compatible/dp/B08LHTJTBB/ref=sr_1_7?crid=1ZXG2US4H7CDD&keywords=laptop%2Bstand&qid=1692535319&sprefix=laptop%2Bstan%2Caps%2C337&sr=8-7&th=1',
  buttonTitle: 'view on amazon'
},
{
  id: '10',
  title: 'STRIFF Pad',
  description: 'My XXL mouse pad is likely a large-sized pad designed for gamers and professionals, providing ample space for smooth, precise mouse movements. Typically made from a durable, non-slip rubber base, it ensures stability during intense use. The surface is often smooth, optimized for both optical and laser mice, allowing for effortless gliding.',
  imglink: 'https://i.ibb.co/D8pVJZQ/pad.jpg',
  shoplink: 'https://www.amazon.in/STRIFF-Mousepad-230X190X2mm-Waterproof-Compatible/dp/B0CV7XMKDJ/ref=sr_1_16?crid=2AVHF7BY526E5&dib=eyJ2IjoiMSJ9.5qHrzxg9KlJqlR_Dap9yreXCwBERsZv4mNWLPcUP8K6LT77KXwP2E9MtAKgliv5TT7ww_FvNT8ZC3XlnkLVK7pMzsYCyCx5XGnfTxu7Y7oqT9gC_cGaBfXl7n3v84dPdrnmYeKJPfFPO8y86oZH6KwExh5V2S2In69HYmriERHvPr5h3_RI9lEXNGtsfmF7An8KxTZDJXPP8-OOoAGQQdt33704I5-VAEx5d87LKe0E.z51vHY68JPlqwSrF-aTazBONWIAPNKCKPM_eomB1b9g&dib_tag=se&keywords=pad+mouse&qid=1725641374&sprefix=pad+m%2Caps%2C278&sr=8-16',
  buttonTitle: 'view on amazon'
},
{
  id: '11',
  title: 'Boat Rockerz 450',
  description: 'Again i Purchased because it have superb base zone in with valuable money and it is super comfort ear cups with surrounding freature',
  imglink: 'https://i.ibb.co/pv5cbTs/headphone.jpg',
  shoplink: 'https://www.amazon.in/Boat-Rockerz-450-Lightweight-Compatibility/dp/B086671ZSR/ref=sr_1_2?crid=1CS3N8OH8QKQG&dib=eyJ2IjoiMSJ9.HpWI2eB2JTDRxFQ8P0ttls_KokJepZBPd3uW-H4ZfG_e58iW22q8HlxDraGRISlhBeXMERFWKR-wismGeU_TlYv22AFSKCXeXHFXV3J-UatYt60lKOtuQB__EhvVu6V1aMjbSFZuL7Z6C5_Cr2y3DA63fPG7pWYEaxXzuB2eKfq9ybmr6DrkbVBctO7I5VguhhiSLYhX9jd2srx8eP7r0sfXHjFYdDSSbOemMps1chE.1bxJ4TFWIgWAYO7SSPeglBi9XCeMkUi2qaIYaKaw4cY&dib_tag=se&keywords=boat+rockerz+450&qid=1725642432&sprefix=boat+rock%2Caps%2C366&sr=8-2',
  buttonTitle: 'view on amazon'
},
{
  id: '12',
  title: 'OnePlus Nord Buds',
  description: 'I bought this when it was launched. Its sound is immersive and bass is so good. Actually I need this because when I am tired of coding than I used to listen song, movies and etc.its charge is also fine',
  imglink: 'https://i.ibb.co/Tvs5yFs/buds-image.jpg',
  shoplink: 'https://www.amazon.in/OnePlus-Wireless-Earbuds-Drivers-Playback/dp/B0C8JB3G5W/ref=sr_1_2?keywords=oneplus%2Bnord%2Bbuds%2B2r&qid=1692534175&sprefix=oneplur%2Bnord%2Bbud%2Caps%2C312&sr=8-2&th=1',
  buttonTitle: 'view on amazon'
}
]

const GearCard = ({ title, img, description, shoplink, buttonTitle }) => {
  return (
    <div className="card">
      <div className="img-g-overflow">
        <div
          style={{ backgroundImage: `url(${img})` }}
          className="img-card-g"
        ></div>
      </div>
      <div className="g-card-text-contain">
        <h3 className="heading-g">{title}</h3>
        <p className="text-g">{description}</p>
        <a href={shoplink} className="btn-link-g">{buttonTitle}</a>
      </div>
    </div>
  );
};

const Gear = () => {
  const [loading, setLoading] = useState(true);  // State to handle loading
  const data = GearData.sort((a, b) => a.id - b.id);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => setLoading(false), 1000);  // Simulate data loading for 1 second
  }, []);

  const indexofLastItem = (currentPage + 1) * itemsPerPage;
  const indexofFirstItem = indexofLastItem - itemsPerPage;
  const currentItems = data.slice(indexofFirstItem, indexofLastItem);

  const handlePageClick = (e) => {
    setCurrentPage(e.selected);
  };

  if (loading) {
    return <Loader />;  // Show loader while loading
  }

  return (
    <>
      <h2 className="edu-heading">My Gears</h2>
      <div className="gear-container">
        <div className="gear-cards">
          {currentItems.map((e) => (
            <GearCard
              key={e.id}
              title={e.title}
              img={e.imglink}
              description={e.description}
              shoplink={e.shoplink}
              buttonTitle={e.buttonTitle}
            />
          ))}
        </div>
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={Math.ceil(data.length / itemsPerPage)}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
      </div>
    </>
  );
};
export default Gear;