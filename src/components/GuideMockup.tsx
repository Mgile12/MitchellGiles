import { CheckSquare } from 'lucide-react';

export default function GuideMockup() {
  return (
    <div className="w-full h-full flex items-center justify-center p-8 bg-gradient-to-br from-slate-100 to-slate-200">
      <div className="relative bg-white rounded-2xl shadow-2xl p-10 max-w-md w-full transform -rotate-1">
        <div className="flex flex-col items-center text-center space-y-4">
          <CheckSquare className="w-10 h-10 text-slate-700" strokeWidth={1.5} />

          <h3 className="text-2xl font-bold text-slate-900 leading-tight px-4">
            The 9 Signs Your Marketing Is Stealing From You
          </h3>

          <p className="text-sm text-slate-600 font-medium">
            A no-bullshit guide by Mitchell Giles
          </p>

          <div className="pt-6 w-full space-y-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-2 bg-slate-100 rounded-full" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
