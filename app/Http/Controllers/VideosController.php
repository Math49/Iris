<?php

namespace App\Http\Controllers;

use App\Models\Videos;
use Spatie\Permission\Models\Role;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class VideosController extends Controller
{
    public function index()
    {
        
        $videos = Videos::all();
        

        return Inertia::render('Videos/Videos', [
            'videos' => $videos,
        ]);
    }

    public function create()
    {
        return Inertia::render('Videos/AddVideos');
    }
    

    public function store(Request $request)
    {
        dd('Hello World');
        $request->validate([
            'video' => 'required|file|mimes:jpg,jpeg,png,mp4,mov,avi|max:20480', // 20MB
        ]);

        $file = $request->file('video');
        $fileName = time() . '.' . $file->getClientOriginalExtension();
        $path = $file->storeAs('public/video', $fileName);

        $videos = new Videos([

            'name' => $fileName,
            'link' => $path,
        ]);
        $videos->save();

        return redirect()->back()->with('success', 'Fichier envoyé avec succès.');
    }
    
    
}
