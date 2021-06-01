import styled from 'styled-components';

export const ProductWrapper = styled.div`
  position:relative;
  width:1020px;
  box-sizing:border-box;
`;

export const ProductItem = styled.div`
  position:relative;
  width:300px;
  float:left;
  margin:20px;
  border-radius:5px;
  box-sizing:border-box;
  box-shadow:1px 5px #000;
  .pic{
    height:200px;
    width:280px;
    float:left;
    margin:10px;
  }
  .h1{
  	margin:0px;
  	text-align:justify:
  	float:left;
  }
  .h5{
  	margin:0px;
    float:left;
  }
`;

export const ProductDetailWrapper = styled.div`
  position:relative;
  box-sizing:border-box;
`;

export const ProductDetailItem = styled.div`
  position:relative;
  width:800px;
  float:center;
  margin:20px 300px;
  border-radius:5px;
  box-sizing:border-box;
  box-shadow:1px 5px #000;
  .pic{
    height:400px;
    width:400px;
    margin-top:10px;
    margin-left:200px;
  }
  .h1{
    margin:0px;
    text-align:justify:
    float:left;
  }
  .h5{
    margin:0px;
    float:left;
  }
`;
