import { List } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import { ListItemButton } from "@mui/material";
import "./pagination.css";

// in order to receive an array of elements, we will use standard "range" function

const range = (start, end) => {
  return [...Array(end - start).keys()].map((el) => el + start);
};

// we do not want to see all 10 pages on our page, so we will "cut" this pages in different parts: just to see 5 pages
// as number;

const getPagesCut = ({ pagesCount, pagesCutCount, currentPage }) => {
  // ceilling we will use 2 "help" properties to receive correct page numbers
  const ceiling = Math.ceil(pagesCutCount / 2);
  const floor = Math.floor(pagesCutCount / 2);

  //   it's simple logic of conditions to receive correct page numbers like start, end and range of 5 pages;

  if (pagesCount < pagesCutCount) {
    return { start: 1, end: pagesCount + 1 };
  } else if (currentPage >= 1 && currentPage <= ceiling) {
    return { start: 1, end: pagesCutCount + 1 };
  } else if (currentPage + floor >= pagesCount) {
    return { start: pagesCount - pagesCutCount + 1, end: pagesCount + 1 };
  } else {
    return { start: currentPage - ceiling + 1, end: currentPage + floor + 1 };
  }
};

// below is a pagination item, which we use for each page, using functions to change page numbers and disable
// pages, if they are First/Last

const PaginationItem = ({
  page,
  currentPage,
  changePageNumber,
  isDisabled,
}) => {
  return (
    <ListItem onClick={() => changePageNumber(page)} className="listItem">
      <ListItemButton className="listItemButton" disabled={isDisabled}>
        {page}
      </ListItemButton>
    </ListItem>
  );
};

// as a component we will exprot Pagination function with our help functions

const Pagination = ({ currentPage, todos, dataPerPage, changePageNumber }) => {
  // we are using total pages, page cutting and an array of pages; First and Last pages - is by themselves;
  const pagesCount = Math.ceil(todos / dataPerPage);
  const pagesCut = getPagesCut({ pagesCount, pagesCutCount: 5, currentPage });
  const pages = range(pagesCut.start, pagesCut.end);
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === pagesCount;
  return (
    <List
      className="pagination"
      sx={{ display: "flex", justifyContent: "center" }}
    >
      <PaginationItem
        page="First"
        currentPage={currentPage}
        changePageNumber={() => changePageNumber(1)}
        isDisabled={isFirstPage}
      />
      {/* for "Prev" and "Last" without additional logic using ternary operator additional mistake will arise */}
      <PaginationItem
        page="Prev"
        currentPage={currentPage}
        changePageNumber={
          currentPage === 1
            ? () => changePageNumber(currentPage)
            : () => changePageNumber(currentPage - 1)
        }
        isDisabled={isFirstPage}
      />
      {pages.map((page) => (
        <PaginationItem
          page={page}
          key={page}
          currentPage={currentPage}
          changePageNumber={changePageNumber}
        />
      ))}
      <PaginationItem
        page="Next"
        currentPage={currentPage}
        changePageNumber={
          isLastPage
            ? () => changePageNumber(currentPage)
            : () => changePageNumber(currentPage + 1)
        }
        isDisabled={isLastPage}
      />
      <PaginationItem
        page="Last"
        currentPage={currentPage}
        changePageNumber={() => changePageNumber(pagesCount)}
        isDisabled={isLastPage}
      />
    </List>
  );
};
export default Pagination;
