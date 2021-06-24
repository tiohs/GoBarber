import React, { Component } from 'react';

import PostItem from './PostItem';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Vanessa Romero',
          avatar: 'https://z-m-scontent.flad4-1.fna.fbcdn.net/v/t1.6435-9/fr/cp0/e15/q65/122779844_3087595691467292_5836498404155056324_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=85a577&efg=eyJpIjoibyJ9&_nc_eui2=AeFkgHSy-6TGn5QpXPVbZ0RdOGWScuRVy0Y4ZZJy5FXLRo-wg-2iAceI1_PkJbnbI-Y2xGJ2rsPpo16qAHyMtwm6&_nc_ohc=PWLzIbEKZ4UAX-ZAp20&_nc_ad=z-m&_nc_cid=1390&_nc_eh=89ee37680b7bc8cc912ca51d92f9a0b2&_nc_rml=0&_nc_ht=z-m-scontent.flad4-1.fna&tp=14&oh=e72f2d3b2846d6bc77b4db0acaa3c29e&oe=60D9AB11'
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 2,
            author: {
              name: 'Diego Fernandes',
              avatar: 'https://z-m-scontent.flad4-1.fna.fbcdn.net/v/t1.6435-9/fr/cp0/e15/q65/202051242_1720452601473356_6152605063003650941_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=85a577&efg=eyJpIjoibyJ9&_nc_eui2=AeGKJ32IQxcDORhQpw8utYhn6YPQJ2PuLznpg9AnY-4vObiyv0Fl1Hh1_mbsyEsu_zW_gMiv_bXiEEBWxi_CcBl9&_nc_ohc=W3218BbHQ1cAX-7nMKX&_nc_ad=z-m&_nc_cid=1390&_nc_eh=89ee37680b7bc8cc912ca51d92f9a0b2&_nc_rml=0&_nc_ht=z-m-scontent.flad4-1.fna&tp=14&oh=f672050cd0e53baf99f51a77fefe8026&oe=60DABBD4'
            },
            date: '04 Jun 2019',
            content:
              'A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)'
          }
        ]
      },
      {
        id: 3,
        author: {
          name: 'Neil Cook',
          avatar: 'https://z-m-scontent.flad4-1.fna.fbcdn.net/v/t1.6435-9/fr/cp0/e15/q65/125217596_3452538994841615_1459075241032202472_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=85a577&efg=eyJpIjoibyJ9&_nc_eui2=AeERKXm4CexDkyjxsBLPVlOjdPudhesXu7B0-52F6xe7sK6dNvx9lat15XTmDeiSXVLv09u3Pg5DxSGFLghq1dtq&_nc_ohc=pQPABOU5tv8AX8OvEXn&_nc_ad=z-m&_nc_cid=1390&_nc_eh=89ee37680b7bc8cc912ca51d92f9a0b2&_nc_rml=0&_nc_ht=z-m-scontent.flad4-1.fna&tp=14&oh=1fe3a9275fe989989fcaaf0694f088fc&oe=60D9D008'
        },
        date: '04 Jun 2019',
        content:
          'Fala galera, beleza?\nEstou fazendo o Bootcamp GoStack e está sendo muito massa! Alguém mais aí fazendo? Comenta aí na publicação para trocarmos uma idéia',
        comments: [
          {
            id: 4,
            author: {
              name: 'Clara Lisboa',
              avatar: 'https://i.pravatar.cc/150?img=5'
            },
            date: '04 Jun 2019',
            content:
              'Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios construída!'
          },
          {
            id: 5,
            author: {
              name: 'Cézar Toledo',
              avatar: 'https://i.pravatar.cc/150?img=11'
            },
            date: '04 Jun 2019',
            content:
              'Que maaaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes'
          }
        ]
      },
      {
        id: 6,
        author: {
          name: 'Gabriel Lisboa',
          avatar: 'https://i.pravatar.cc/150?img=51'
        },
        date: '04 Jun 2019',
        content:
          'Fala galera, beleza?\nEstou fazendo o Bootcamp GoStack e está sendo muito massa! Alguém mais aí fazendo? Comenta aí na publicação para trocarmos uma idéia',
        comments: [
          {
            id: 4,
            author: {
              name: 'Clara Lisboa',
              avatar: 'https://i.pravatar.cc/150?img=5'
            },
            date: '04 Jun 2019',
            content:
              'Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios construída!'
          },
          {
            id: 5,
            author: {
              name: 'Cézar Toledo',
              avatar: 'https://i.pravatar.cc/150?img=11'
            },
            date: '04 Jun 2019',
            content:
              'Que maaaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes'
          }
        ]
      }
    ]
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="postlist">
        {posts.map(post => (
          <PostItem key={post.id} {...post} />
        ))}
      </div>
    );
  }
}

export default PostList;
