export default function TestPage() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
            <div className="text-center text-white">
                <h1 className="text-4xl font-bold mb-4">Styling Test</h1>
                <p className="text-xl">If you can see this with blue to purple gradient background, Tailwind CSS is working!</p>
                <div className="mt-8 p-6 bg-white/20 rounded-lg backdrop-blur-sm">
                    <p className="text-lg">Glass effect test</p>
                </div>
                <button className="mt-6 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Test Button
                </button>
            </div>
        </div>
    );
}