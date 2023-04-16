/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Stafs', [{
      stafName: 'One Punch Man',
      price: 1500,
      photo: 'https://upload.wikimedia.org/wikipedia/ru/c/c3/OnePunchMan_manga_cover.png',
      opisanie: 'Парень по имени Сайтама живёт в мире, иронично похожем на наш. Ему 25, он лыс и прекрасен и к тому же силен настолько, что с одного удара аннигилирует всё, что представляет опасность для человечества. Он ищет себя в этой жизни, попутно раздавая подзатыльники монстрам и злодеям.',
      userId: 1,
      count: 0,
      countmin: 0,
    },
    {
      stafName: 'Fantastic Four',
      price: 1300,
      photo: 'https://www.previewsworld.com/SiteImage/MainImage/STL195424',
      opisanie: 'вымышленная команда супергероев комиксов компании Marvel Comics, дебютировавшая в The Fantastic Four #1 (Ноябрь 1961). Создателями выступили сценарист Стэн Ли и художник Джек Кирби, которые намеревались сформировать первый супергеройский союз, членами которого были бы представители одной семьи.',
      userId: 1,
      count: 0,
      countmin: 0,
    },
    {
      stafName: 'Spider-Man',
      price: 1500,
      photo: 'https://static.insales-cdn.com/images/products/1/3931/650375003/3.jpg',
      opisanie: 'настоящее имя Пи́тер Бе́нджамин Па́ркер (англ. Peter Benjamin Parker) — супергерой, появляющийся в комиксах издательства Marvel Comics, созданный Стэном Ли и Стивом Дитко. С момента своего первого появления на страницах комикса Amazing Fantasy № 15 (рус. Удивительная фантазия, август 1962) он стал одним из самых популярных супергероев. Ли и Дитко задумывали персонажа как подростка-сироту, воспитанного дядей и тётей, совмещающего жизнь обычного студента и борца с преступностью. Человек-паук получил суперсилу, увеличенную ловкость, «паучье чутьё», а также способность держаться на отвесных поверхностях и выпускать паутину из рук с использованием прибора собственного изобретения.',
      userId: 1,
      count: 0,
      countmin: 0,
    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Stafs', null, {});
  },
};
