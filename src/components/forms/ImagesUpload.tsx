import OrSeparator from "../layout/or-separator";

const ImagesUpload = () => {
    return (
        <div className='border border-gray-300 w-full flex py-8 bg-slate-100 rounded-lg'>
            <div className="flex flex-col w-full h-full items-center text-sm">
                <h3>Arraste e solte as images aqui</h3>
                <OrSeparator />
                <span><span className='text-primary font-semibold'>clique aqui</span> para selecionar as images</span>
            </div>
        </div>
    )
};
export default ImagesUpload;