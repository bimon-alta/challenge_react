import React from 'react';
import '../css/top-article-list.css';

class TopArticleList extends React.Component{
    render() {
        return (
            <div className="col-md-5 top-10-article">
                <div className="row">
                    <div className="col-md-6 article-list-title" >
                        Top Berita Terkini
                    </div>
                    <div className="col-md-6 article-list-view-all" >
                        <a className="view-all" href="">Lihat Semua Berita</a>
                    </div>
                    <table className="table table-bordered">                            
                        <tbody>
                            <tr className="article-item">
                                <td>
                                    <div className="article-no">#1</div>
                                    <a href="">Perang dunia 3</a>
                                </td>
                            </tr>
                            <tr className="article-item">
                                <td>
                                    <div className="article-no">#2</div>
                                    <a href="">China klaim natuna</a>
                                </td>
                            </tr>
                            <tr className="article-item">
                                <td>
                                    <div className="article-no">#3</div>
                                    <a href="">Banjir DKI Jakarta</a>
                                </td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default TopArticleList;