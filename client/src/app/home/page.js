import React from "react";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Suscribtion from "@/components/Subscription";
import OurStory from "@/components/OurStory";
import BestDeal from "@/components/BestDeal";
import HighlyRecomernded from "@/components/HighlyRecomernded";
import OffersCarousel from "@/components/OfferCarousel/OfferCarousel";
import { SearchIcon } from "@/components/SearchIcon";
import { Input } from "@nextui-org/react";
import SelectCategoryList from "@/components/selectcategorylist/SelectCategoryList";
function page() {
  return (
    <div>
      <Navbar />
      <div className="flex lg:hidden mx-2 md:mx-11 lg:ml-16px  justify-center items-center">
        <div>
          <SelectCategoryList />
        </div>

        <div className="relative">
          <Input
            classNames={{
              base: "max-w-full sm:max-w-[15rem] h-[55px] mt-[3px]",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper:
                "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="Type to search..."
            size="sm"
            startContent={
              <>
                <SearchIcon />
              </>
            }
            type="search"
          />
        </div>
      </div>
      <Banner />
      <Suscribtion />
      <OffersCarousel />
      <HighlyRecomernded />
      <OurStory />
      <BestDeal />
      <Footer />
    </div>
  );
}

export default page;
