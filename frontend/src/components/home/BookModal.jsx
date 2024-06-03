import { AiOutlineClose } from 'react-icons/ai';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';


// using props that book: showing data, onClose to cloase modal
const BookModal = ({ book, onClose }) => {
    return (
        <div
            className='fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center '
            onClick={onClose}
        >
            <div
                onClick={(event) => event.stopPropagation()}
                className='w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative'
            >
                <AiOutlineClose
                    className='absolute right-6 top-6 text-3xl text text-red-300 cursor-pointer'
                    onClick={onClose}
                />
                <h2 className=' w-fit px-4 py-1 bg-blue-300 rounded-lg'>
                    {book.publishYear}
                </h2>
                <h4 className='my-2 text-gray-500'>{book._id}</h4>
                <div className='flex justify-start items-center gap-x-2'>
                    <PiBookOpenTextLight className='text-red-300 text-2xl' />
                    <h2 className='my-1'>{book.title}</h2>
                </div>
                <div className='flex justify-start items-center gap-x-2'>
                    {/* icon */}
                    <BiUserCircle className='text-red-300 text-2xl' />
                    {/* author info */}
                    <h2 className='my-1'>{book.author}</h2>
                </div>
                <p className='mt-4'> More info to show</p>
                <p className='my-2'>
                    Textholder Testing: A quantum computer is a computer that exploits quantum mechanical phenomena. On small scales, physical matter exhibits properties of both particles and waves, and quantum computing leverages this behavior using specialized hardware.
                </p>

            </div>
        </div>
    );
};

export default BookModal;