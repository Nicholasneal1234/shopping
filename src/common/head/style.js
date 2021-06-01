import styled from 'styled-components';

export const HeadWrapper = styled.div`
  position:relative;
  background:#969696;
  height:56px;
  border-bottom:1px solid #f0f0f0;
  box-shadow:1px 3px #2B2B2B;
`;

export const Headd = styled.div`
  width:1260px;
  height:56px;
  margin:0 auto;
  padding-right:70px;
  box-sizing:border-box;
`;

export const HeadItem = styled.div`
  line-height:56px;
  padding:0px 15px;
  font-size:25px;
  font-weight:bold;
  color:#000000;
  &.left{
  	float:left;
  }
  &.right{
  	float:right;
  }
  &.right-s{
    float:right;
    font-size:12px;
  }
`;

export const SearchWrapper = styled.div`
  position:relative;
  float:left;
`;

export const HeadSearch = styled.input.attrs({placeholder:'收尋'})`
  width:240px;
  height:38px;
  padding:0 20px;
  box-sizing:border-box;
  border-radius:19px;
  margin-top:9px;
  background:#eee;
  border:none;
  outline:none;
  font-size:15px;
  &.focused{
    width:300px;
  }
`;

export const Button = styled.button`
  width:90px;
  height:38px;
  padding:0 20px;
  box-sizing:border-box;
  border-radius:19px;
  margin-top:9px;
  margin-left:20px;
  background:#eee;
  border:none;
  outline:none;
  font-size:15px;
  font-weight:bold;
  background:#6C6C6C;
  box-shadow:1px 3px #2B2B2B;
`;