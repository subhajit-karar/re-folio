import React from 'react';


const items = (props) => {
    return(

        <tr>
              <th scope="row">
                <h5>{props.pname}</h5>
              </th>
              <td className="width50">{props.pdes}</td>
              <td><strong>$79.00</strong></td>
              <td className="width25 text-center">
              <button onClick={props.deleteClicked} className="text-dark"><i className="fa fa-trash"></i></button>
              <button onClick={props.saveClicked} className="btn btn-success btn-block">Save for Later</button>
              </td>
          </tr>
    
)};

/*<tr>
  <th scope="row">
    <h5>Lumix camera lense</h5>
  </th>
  <td className="width50">Moisture-wicking, antimicrobial 100% polyester design wicks for life of garment. No-curl, rib-knit collar; special collar band maintains crisp fold; three-button placket with dyed-to-match buttons; hemmed sleeves; even bottom with side vents; Import. Embroidery. Red Pepper.</td>
  <td><strong>$79.00</strong></td>
  <td className="width25 text-center">
  <a href="#" className="text-dark"><i className="fa fa-trash"></i></a>
  <a href="#" className="btn btn-success btn-block">Save for Later</a>
  </td>
</tr>*/


export default items;
