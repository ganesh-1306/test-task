import Result from "@/components/Result";
import Summary from "@/components/Summary";

export default function Home() {
  return (
    <div className="md:grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen md:p-8 md:pb-20 gap-16 sm:p-0">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start max-w-screen-lg mx-auto">
        <div className="lg:grid grid-cols-2 items-center bg-white rounded-3xl shadow-2xl shadow-indigo-500/20 lg:min-w-[740px]">
          <div>
            <div className="bg-[linear-gradient(180deg,hsl(252,100%,67%).44%,hsl(241,81%,54%)_64%)] md:rounded-3xl rounded-b-3xl p-10">
              <h3 className="text-center text-2xl font-bold text-[#c8c7ff] mb-8">
                Your Result
              </h3>
              <Result />
              <h3 className="text-center text-4xl font-bold text-white mb-6">
                Great
              </h3>
              <p className="text-lg font-semibold text-[#c8c7ff] text-center">
                You scored higher than 65% of <br className="lg:block hidden" />{" "}
                the people who have taken <br className="lg:block hidden" />{" "}
                these tasks.
              </p>
            </div>
          </div>
          <div>
            <div className="md:p-10 p-8">
              <h2 className="text-2xl font-bold text-[#303b5a] mb-6">
                Summary
              </h2>
              <Summary />
              <div className="pt-3">
                <button className="bg-[#303b59] text-lg font-bold rounded-full w-full px-8 py-3 text-[#f5f5ff] hover:bg-[linear-gradient(180deg,hsl(252,100%,67%).44%,hsl(241,81%,54%)_64%)]">
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
