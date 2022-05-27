import styled from "styled-components";

const Pagination = ({ nowPage, total, onPageChange }) => {
  // total = 1 10 11 20 21 100 101
  // lastPage = 1 1 2 2 3 10 11
  const lastPage = Math.ceil(total / 10);

  // nowPage = 1 10 11 20 21 100 101
  // startPage = 1 1 11 11 21 91 101
  const startPage = Math.ceil(nowPage / 10) * 10 - 9;

  // nowPage = 1 10 11 20 21 100 101
  // endPage = 10 10 20 20 30 100 110
  const endPage = startPage + 9 > lastPage ? lastPage : startPage + 9;

  const pageList = [];

  for (let i = startPage; i <= endPage; i++) {
    pageList.push(i);
  }

  return (
    <List>
      {nowPage > 1 && (
        <Page onClick={() => onPageChange(nowPage - 1)}>{"<"}</Page>
      )}
      {pageList.map((page) => (
        <Page
          isActive={page === nowPage}
          key={page}
          onClick={() => onPageChange(page)}
        >
          {page}
        </Page>
      ))}
      {nowPage < lastPage && (
        <Page onClick={() => onPageChange(nowPage + 1)}>{">"}</Page>
      )}
    </List>
  );
};

const List = styled.div`
  display: flex;
  justify-content: center;
`;
const Page = styled.button`
  background: ${({ isActive }) => isActive && "#000"};
  color: ${({ isActive }) => isActive && "#fff"};
`;
export default Pagination;
