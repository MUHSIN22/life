import { parseDateString } from '@lib/utils';

function TwitterResultCard({ covidConnectResults }) {
    return (
        <div className="w-full mx-auto" key="TwitterResultCard">
            <div className="flex justify-center pt-10">
                <div className="w-full">
                    <div className="bg-white dark:bg-gray-1200 shadow-md rounded-lg px-3 py-2 mb-4">
                        <div className="block text-gray-700 dark:text-primary-400 text-lg font-semibold py-2 px-2">
                            Live Twitter Results
                        </div>
                        <div className="py-3 text-sm">
                            {covidConnectResults.map((result) => {
                                return (
                                    <a
                                        href={`https://twitter.com/i/web/status/${result.id}`}
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        <div className="flex justify-start cursor-pointer text-gray-700  hover:bg-gray-200 dark:hover:bg-gray-1100 rounded-md px-2 py-2 my-2">
                                            <span className="bg-gray-400 h-2 w-2 m-2 rounded-full"></span>
                                            <div className="px-2">
                                                <div className="text-sm dark:text-primary-400 font-normal text-black-500 tracking-wide">
                                                    {parseDateString(result.created_at)}
                                                </div>
                                                <div className="flex-grow text-black dark:text-white font-semibold">
                                                    {result.text}
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TwitterResultCard;
