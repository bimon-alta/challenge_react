import React from 'react';
import '../css/top-article-list.css';

class TopNewsList extends React.Component{

    render() {
        // const topTenNewsList = this.props.theHeadLineNews.slice(0, 10).map((item) => item);
		const topTenNewsList = this.props.topHeadLines.slice(0, 10).map((item, index)=>{
			return (
				<tr className="article-item">
					<td>
						<div className="article-no">{index + 1}</div>
						<a href={item.url}>{item.title}</a>
					</td>
				</tr>
				
			)
		});
		
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
                           {topTenNewsList}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default TopNewsList;