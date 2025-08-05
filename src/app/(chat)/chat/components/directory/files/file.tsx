import { Clipboard, Download } from "lucide-react";

const File: React.FC = () => {
  return (
    <div className="flex justify-between items-center gap-x-4 p-3">
      <div className="flex gap-x-4">
        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-red-100">
          <Clipboard color="#F56565" size={24} />
        </div>

        <div className="flex flex-col items-start">
          <h3 className="text-sm font-medium">19.pdf</h3>

          <div className="flex gap-x-2.5 text-xs text-gray-400">
            <h3>PDF</h3>
            <span>9mb</span>
          </div>
        </div>
      </div>

      <button>
        <Download color="#615EF0" size={24} />
      </button>
    </div>
  );
};

export default File;
