import styled from '@emotion/styled';

// <Layouts>
// <div className="Header">
//   <h1>오늘의 할 일</h1>
// </div>
// <div className="TDC">
//   <h1>오늘은 이런 일을 했어요</h1>
//   <TDC />
// </div>
// <div className="TDR">
//   <h1>이런 것도 해보는 건 어때요?</h1>
//   <TRC />
// </div>
// </Layouts>

export const Header = styled.div`
  width: 100%;
  height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TDCS = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;

  flex-direction: column;
  align-items: center;
`;

export const TRCS = styled.div`
  width: 100%;
  height: 35vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
`;

export const TRCBOX = styled.div`
  display: flex;
`;

export const TDCSHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
`;
