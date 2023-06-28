import Image from '@/sbstr8/components/image';
import cfg from '@/../sbstr8.config';

const Loading = () => (
  <div
    style={{ width: '100vw', height: '100vh' }}
    className="flex flex-row flex-nowrap justify-center items-center"
  >
    <Image src={cfg.image || ''} alt="Logo" width={512} height={512} />
  </div>
);

export default Loading;
