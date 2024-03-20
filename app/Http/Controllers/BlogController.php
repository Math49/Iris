<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Blog;
use App\Models\User;
use Inertia\Inertia;

class BlogController extends Controller
{
    public function index()
    {   

        $blogs = Blog::all();
        $users = User::all();

    
        return Inertia::render('Blog/BlogView', [
            'blogs' => $blogs,
            'users' => $users
        ]);
    }

    public function addBlog()
    {
        return Inertia::render('Blog/BlogAdd');
    }

    public function create(Request $request)
    {

        

        $request->validate([
            'title' => 'required',
            'content' => 'required',
            'media_type' => 'required|in:image,video',
            'media' => 'required|file|mimes:jpeg,jpg,png,gif,mp4,mov,avi,flv,wmv',
        ]);
    
        // Récupérez le fichier de l'input 'media'
        $file = $request->file('media');
        
        // Générez un nom de fichier unique
        $fileName = time() . '.' . $file->getClientOriginalExtension();
    
        // Stockez le fichier dans le dossier 'public/media' et récupérez le chemin d'accès
        $path = $file->storeAs('media', $fileName, 'public');
    
        // Créez un nouveau blog avec le chemin d'accès du fichier
        Blog::create([
            'user_id' => auth()->user()->id,
            'title' => $request->title,
            'content' => $request->content,
            'media_type' => $request->media_type,
            'media' => "storage/".$path, // Utilisez le chemin d'accès du fichier
        ]);
        
        return redirect()->route('blog.index');
    }
}
