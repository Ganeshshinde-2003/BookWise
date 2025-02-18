import BookList from "@/components/BookList";
import BooKOverview from "@/components/BooKOverview";
import { sampleBooks } from "@/constants";

const Home = () => (
  <>
    <BooKOverview 
      {...sampleBooks[0]}
    />
    <BookList
      title="Latest Books"
      books={sampleBooks}
      containerClassName="mt-28"
    />
  </>
);

export default Home;
