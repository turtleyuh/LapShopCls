import React from 'react';
import data from '../data';
import {Link} from 'react-router-dom';

function ProductScreen(props){
	console.log(props.match.params.id);
	const product = data.products.find(x => x._id === props.match.params.id);
	return <div>
				<div>
					<Link to="/"><i className="fas fa-arrow-left"></i>Back</Link>
				</div>
				<div className="detail">
					<div className="detail-image">
						<img src={product.image} alt="product"/>
					</div>
					<div className="detail-info">
						<ul>
							<li>
								<h2>{product.name}</h2>
							</li>
							<li>
								<h4>{product.brand}</h4>
							</li>
							<li>
								Price: <b>{product.price} vnd</b>
							</li>
							<li>
								<b>Quantity:</b> <select>
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
									<option>5</option>
									<option>6</option>
								</select>
							</li>
							<li>
								<button>Add to cart</button>
							</li>
							<li>
								<b>Description:</b>
								<div>
									{product.description}
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
}
export default ProductScreen;