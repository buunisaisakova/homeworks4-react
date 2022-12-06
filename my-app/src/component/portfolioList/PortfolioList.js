



function PortfolioList ({portfolioList}){

    return(
        <ul>
            {
                portfolioList.map((user,index)=> <li key ={index}>{user}</li>)
            }
        </ul>
    )
}
export default PortfolioList;