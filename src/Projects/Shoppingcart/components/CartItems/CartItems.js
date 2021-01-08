import React from 'react';


const items = (props) => {
    return(
        <tr>
              <th scope="row">
                <p>{props.pname}</p>
                
              </th>
              <td className="width50">
                <p><strong>SKU: </strong>{props.sku}<br /> <strong>Description: </strong>{props.pdes}<br /><strong>Category: </strong>{props.cat}
                <br/>{props.size && <span><strong>Size: </strong>{props.size}</span>}</p>
              </td>
              <td><strong>{props.price}</strong></td>
              <td className="text-center">
              <button onClick={props.deleteClicked} className="btn btn-light"><i className="fa fa-trash"></i></button>
              </td>
          </tr>
    
)};



export default items;
