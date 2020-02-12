import styled from "styled-components";

const HomePageStyle = styled.div`
  .table-container {
    display: flex;
    justify-content: center;
    .table-wrapper {
      width: 60%;
      .green-bg {
        background: #aaf3aa;
      }
      .red-bg {
        background: #dc8585;
      }
      .blue-bg {
        background: #82b2e6;
      }
    }
  }
  .title-container {
    display: flex;
    justify-content: center;
    .title-wrapper {
      width: 40%;
    }
    .title-field {
      width: 80%;
    }
  }
`;

export default HomePageStyle;
